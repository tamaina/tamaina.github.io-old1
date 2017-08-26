// npm require
const grunt = require('grunt')
const extend = require('extend')
const fs = require('fs')
const fm = require('front-matter')
const crypto = require('crypto')
const join = require('path').join

// debug
const DEBUG = !!grunt.option('debug')

// グローバル気味変数
let pages = []
let info = {}
let manifest = {}
let package = require('./package.json')
let site = require('./.config/default.json')
let temp_dir = 'theme/pug/temp' // 末尾のスラッシュ不要

let src = {
   'everypug': ['theme/pug/**/*.pug','./.temp/**/*.pug'],
   'json': ['config/**/*.json'],
   'js': ['theme/js/**/*.js'],
   'styl': ['theme/styl/**/*.styl', '!' + 'theme/styl/**/_*.styl'],
   'styl_all': ['theme/styl/**/*.styl'],
   'static': ['theme/static/**'],
   'files': ['files/**'],
   'everystyl': ['theme/styl/**/*.styl'],
   'pages': site.sources
}

let dests = {
    'root': 'docs/',
    'everything': 'docs/**',
    'info': 'docs/info.json'
}
module.exports = function(grunt){

    grunt.initConfig({
        clean: {
            temp: {
                src: [`${temp_dir}/**`]
            },
            dest: {
                src: [dests.everything]
            }
        },
        pug: {
            compile: {
                options: {
                    data: 
                        function(dest, src) {
                            return extend(
                                true,grunt.file.readJSON(dests.info),
                                {
                                    "require": require,
                                    "DEBUG": DEBUG
                                }
                            )
                        },
                    filters: require('./pugfilters.js'),
                    debug: false
                },
                files: pugfiles()
            }
        },
        stylus: {
            compile: {
                options: {
                    import: [
                        'nib'
                    ],
                    "include css": true,
                    data: function(dest, src) {
                        return grunt.file.readJSON(dests.info)
                    }
                },
                files: {
                    'docs/assets/style.css' : src.styl
                }
            }
        },
        cssmin: {
            minifybs: {
                files: {
                    'docs/assets/style.min.css': 'docs/assets/style.css'
                }
            }
        },
        browserify: {
            bundle: {
                files: {
                    'docs/assets/main.js' : 'theme/js/main.js'
                }
            }
        },
        uglify: {
            compress: {
                options: {
                    compress: {
                        sequences     : true,  // join consecutive statemets with the “comma operator”
                        properties    : true,  // optimize property access: a["foo"] → a.foo
                        dead_code     : true,  // discard unreachable code
                        drop_debugger : true,  // discard “debugger” statements
                        unsafe        : false, // some unsafe optimizations (see below)
                        conditionals  : true,  // optimize if-s and conditional expressions
                        comparisons   : true,  // optimize comparisons
                        evaluate      : true,  // evaluate constant expressions
                        booleans      : true,  // optimize boolean expressions
                        loops         : true,  // optimize loops
                        unused        : true,  // drop unused variables/functions
                        hoist_funs    : true,  // hoist function declarations
                        hoist_vars    : false, // hoist variable declarations
                        if_return     : true,  // optimize if-s followed by return/continue
                        join_vars     : true,  // join var declarations
                        cascade       : true,  // try to cascade `right` into `left` in sequences
                        side_effects  : true,  // drop side-effect-free statements
                        warnings      : false,  // warn about potentially dangerous optimizations/code
                    }
                },
                files: {
                    'docs/assets/main.min.js' : 'docs/assets/main.js'
                }
            }
        },
        watch: {
            js: {
                files: [src.js],
                tasks: ['debug_override','build_script', 'sw']
            },
            sw: {
                files: ['package.json'],
                tasks: ['sw']
            },
            style: {
                files: [src.styl_all],
                tasks: ['debug_override','build_style']
            },
            settings: {
                files: ['.config/**','Gruntfile.js'],
                tasks: ['debug_override','default']
            },
            pages: {
                files: [src.pages,'theme/pug/**'],
                tasks: ['debug_override','build_pages']
            },
            copy_static: {
                files: [src.static],
                tasks: ['debug_override','copy:static']
            },
            copy_files: {
                files: [src.files],
                tasks: ['debug_override','copy:files']
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: '*',
                    base: 'docs/'
                }
            }
        },
        fontmin: {
            options: {
                dest: 'docs/assets/fonts/',
                basedir: 'theme/fonts/'
            },
            '**/*.ttf':{
                getText: "getBody",
                src: "docs/**/*.html",
            }
        },
        copy: {
            main: {
                files:[
                    {
                        expand: true,
                        cwd: 'theme/static/',
                        src: '**',
                        dest: 'docs/'
                    },
                    {
                        expand: true,
                        src: src.files,
                        dest: "docs/"
                    }
                ]
            },
            wtfpjax: {
                files:[
                    {
                        expand: true,
                        cwd:'node_modules/pjax-api/dist/',
                        src: '**',
                        dest: 'docs/assets/'
                    }
                ]
            }
        }
    })

    
    grunt.loadNpmTasks('grunt-contrib-pug')
    grunt.loadNpmTasks('grunt-contrib-stylus')
    grunt.loadNpmTasks('grunt-contrib-connect')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-browserify')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-fontmin-ex')


    grunt.task.registerTask( 'make_config' , 'Merge all config files' , make_config )
    grunt.task.registerTask( 'prepare_pages' , 'Prepare Pages' , prepare_pages )
    grunt.task.registerTask( 'debug_override' , 'Debug' , () => {
        site = extend(true,site,require('./.config/debug_override.json'))
    })
    grunt.task.registerTask( 'sw' , 'Write service worker' , serviceWokerJses_VerUp )
    
    // 以下はmake_config実行時に自動実行
    // コマンドで動かす用に一応登録
    grunt.task.registerTask( 'register_pages' , 'Register Pages' , register_pages )
    grunt.task.registerTask( 'register_manifest' , 'Register and write out manifest.json' , register_manifest )
    grunt.task.registerTask( 'make_browserconfig' , 'Make Browserconfig' , make_browserconfig )


    //タスクの登録
    grunt.registerTask('default', ['clean', 'before_build', 'build_script', 'build_style', 'pug', 'fontmin', 'copy', 'sw', 'clean:temp'])
    grunt.registerTask('before_build', ['make_config', 'prepare_pages'])
    grunt.registerTask('server', ['debug_override', 'default', 'connect', 'watch'])

    // 以下の3種類でデプロイとして供するときは、swも併せて実行すること。
    grunt.registerTask('build_script', ['browserify', 'uglify'])
    grunt.registerTask('build_style', ['stylus', 'cssmin'])
    grunt.registerTask('build_pages', ['before_build', 'pug', 'fontmin'])

}
function pugfiles() {
    register_pages()
    let out = '{'
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i]
        out += `"docs/${page.attributes.permalink}.html" : "${temp_dir}${page.attributes.permalink.replace( /.\//g , "_" ) }.pug",`
    }
    out = out.substr( 0, out.length - 1 ) 
    out += "}"
    return JSON.parse(out)
}
function make_config(){
    let resultObj = { options: "" },booksObj = new Array()
    resultObj = extend(true,resultObj, { "site" : site })
    resultObj = extend(true,resultObj, { "package" : package })
    resultObj = extend(true,resultObj, { "pages" : register_pages() })
    resultObj = extend(true,resultObj, { "manifest" : register_manifest() })
    grunt.file.write( 'docs/info.json' , JSON.stringify( resultObj ) )
    info = resultObj

    make_browserconfig()

    return info
}

function register_pages(){
    pages = []
    grunt.file.recurse('./pages/', process )
    function process(abspath, rootdir, subdir, filename){
        if ( filename == "template.pug" ) return false
        let page = {}
        if ( !subdir ) subdir = ""
        let file = fs.readFileSync( abspath, 'utf-8' )
        page = extend(true,page,fm(file))
        page.srcname = filename.slice(0,filename.lastIndexOf("."))
        page.srcext = filename.substr(filename.lastIndexOf("."))
        page.subdir = subdir
        let md5hash = crypto.createHash('md5')
        md5hash.update(file, 'binary')
        page.md5 = md5hash.digest('hex')
        page.stats = fs.statSync( abspath )

        if( page.attributes.title === undefined || page.attributes.title === null ) page.attributes.title = page.srcname
        if( page.attributes.description === undefined || page.attributes.description === null ) page.attributes.description = site.description
        if( page.attributes.date )  page.stats.mtime = page.attributes.date
        if( page.attributes.birthtime ) page.stats.birthtime = page.attributes.birthtime
        if( page.attributes.mtime ) page.stats.mtime = page.attributes.mtime
        if( page.attributes.permalink === undefined || page.attributes.permalink === null ) {
            if( site.page_namingrule == "birthtime" ) {
                let birthtime = new Date(page.stats.birthtime)
                if(subdir) page.attributes.permalink = `/${subdir}/${`000${birthtime.getFullYear()}`.slice(-4)}-${`0${birthtime.getMonth()+1}`.slice(-2)}-${`0${birthtime.getDay()}`.slice(-2)}-${`0${birthtime.getHours()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getSeconds()}`.slice(-2)}.${`000${birthtime.getMilliseconds()}`.slice(-4)}` 
                else page.attributes.permalink = `/${`000${birthtime.getFullYear()}`.slice(-4)}-${`0${birthtime.getMonth()+1}`.slice(-2)}-${`0${birthtime.getDay()}`.slice(-2)}-${`0${birthtime.getHours()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getSeconds()}`.slice(-2)}.${`000${birthtime.getMilliseconds()}`.slice(-4)}` 
            } else if( site.page_namingrule == "name" ) {
                if(subdir) page.attributes.permalink = `/${subdir}/${page.srcname}`
                else page.attributes.permalink = `/${page.srcname}`
            } else if( site.page_namingrule == "md5" ) {
                if(subdir) page.attributes.permalink = `/${subdir}/${page.md5}`
                else page.attributes.permalink = `/${page.srcname}`
            } else {
                if(subdir) page.attributes.permalink = `/${subdir}/${page.srcname}`
                else page.attributes.permalink = `/${page.srcname}`
            }
        }
        if( page.attributes.layout === undefined || page.attributes.layout == null ) page.attributes.layout = "default"
        if( page.attributes.published === undefined || page.attributes.published == null ) page.attributes.published = "true"
        if( page.attributes.permalink.indexOf("/") != 0 ) page.attributes.permalink = "/" + page.attributes.permalink
        if( typeof page.attributes.tags === 'string' ) page.attributes.tags = page.attributes.tags.split(" ")
        if( typeof page.attributes.categories === 'string' ) page.attributes.categories = page.attributes.categories.split(" ")
        if( typeof page.attributes.tag === 'string' )
            page.attributes.tags = page.attributes.tag.split(" ")
            delete page.attributes.tag
        if( typeof page.attributes.category === 'string' )
            page.attributes.categories = page.attributes.category.split(" ")
            delete page.attributes.category
        pages.push(page)
    }
    return pages
}

function prepare_pages(){
    for (let i = 0 ; i < pages.length ; i++) {
        let page = pages[i]
        let layout = page.attributes.layout
        let outdata = ""
        if(grunt.file.exists(`theme/pug/templates/${layout}.pug`)) outdata += `extends ../templates/${layout}.pug`
        else if(grunt.file.exists(`theme/pug/templates/${site.default.template}.pug`)) outdata += `extends ../templates/${site.default.template}.pug`
        else throw Error
        outdata += `
block constnum
  - const page_index_numer = ${i}`
        grunt.file.write( `${temp_dir}${page.attributes.permalink.replace( /.\//g , "_" )}.pug` , outdata )
    }
}

function serviceWokerJses_VerUp(){
    for (let i = 0 ; i < site.workers.length ; i++) {
        let swi = site.workers[i]
        let swbody = ""
        if(!grunt.file.exists(swi.srcpath)) return false
        swbody = `var version = '${package.version}';
${fs.readFileSync( swi.srcpath, 'utf-8' )}`
        grunt.file.write( `docs/${swi.outname}.js` , swbody )
    }
}

function register_manifest(){
    let icons = []
    for (let i = 0 ; i < site.icons.length ; i++) {
        let icon = site.icons[i]
        icon.src = site.url.path + icon.path
        delete icon.path
        icons.push(icon)
    }
    manifest = {
        "name": site.name,
        "short_name": site.short_name,
        "icons": icons,
        "start_url": site.url.path,
        "theme_color": site.theme_color.primary,
        "background_color": site.theme_color.secondary
    }
    manifest = extend(true,manifest,site.manifest)
    grunt.file.write( `docs/manifest.json` , JSON.stringify(manifest) )
    return manifest
}

function make_browserconfig(){
    let bcbody = `<?xml version="1.0" encoding="utf-8"?>
    <browserconfig>
      <msapplication>
        <tile>
          <square70x70logo src="${site.url.path}${site.mstiles.s70x70.path}"/>
          <square144x144logo src="${site.url.path}${site.mstiles.s144x144.path}"/>
          <square150x150logo src="${site.url.path}${site.mstiles.s150x150.path}"/>
          <square310x310logo src="${site.url.path}${site.mstiles.s310x310.path}"/>
          <wide310x150logo src="${site.url.path}${site.mstiles.w310x150.path}"/>
          <TileColor>${site.theme_color.secondary}</TileColor>
        </tile>
      </msapplication>
    </browserconfig>`
    grunt.file.write( `docs/browserconfig.xml` , bcbody )
}
