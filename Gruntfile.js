// 設定
const package = require('./package.json')
const config = require('./.config/default.json')

// npm require
const extend = require('extend')
const fs = require('fs')
const grunt = require('grunt')
const fm = require('front-matter')
const crypto = require('crypto')
const join = require('path').join

// グローバル気味変数
let pages = []
let info = {}
let temp_dir = 'theme/pug/temp' // 末尾のスラッシュ不要

let src = {
   'everypug': ['theme/pug/**/*.pug','./.temp/**/*.pug'],
   'json': ['config/**/*.json'],
   'js': ['theme/js/**/*.js'],
   'styl': ['theme/styl/**/*.styl', '!' + 'theme/styl/**/_*.styl'],
   'styl_all': ['theme/styl/**/*.styl'],
   'static': ['theme/static/**/*.*'],
   'files': ['files/**/*.*'],
   'everystyl': ['theme/styl/**/*.styl'],
   'pages': config.sources
}

let dests = {
    'root': 'docs/',
    'everything': 'docs/**/*.*',
    'info': 'docs/info.json'
}
module.exports = function(grunt){

    grunt.initConfig({
        clean: {
            temp: {
                src: [`${temp_dir}/**/*.*`]
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
                            return extend(true,grunt.file.readJSON(dests.info),{ "require": require, "pug_api": require("pug") })
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
                tasks: ['build_script']
            },
            style: {
                files: [src.styl_all],
                tasks: ['build_style']
            },
            pages: {
                files: [src.pages,'.config/default.json','theme/pug/**/*.*'],
                tasks: ['clean', 'build_pages']
            },
            copy_static: {
                files: [src.static],
                tasks: ['copy:static']
            },
            copy_files: {
                files: [src.files],
                tasks: ['copy:files']
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
            static: {
                expand: true,
                src: src.static,
                dest: "docs/"
            },
            files: {
                expand: true,
                src: src.files,
                dest: "docs/files/"
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
    grunt.task.registerTask( 'register_pages' , 'Register Pages' , register_pages )
    grunt.task.registerTask( 'prepare_pages' , 'Prepare Pages' , prepare_pages )

  //タスクの登録
    grunt.registerTask('default', ['clean', 'before_build', 'build_script', 'build_style', 'pug', 'fontmin', 'copy', 'clean:temp'])
    grunt.registerTask('build_script', ['browserify', 'uglify'])
    grunt.registerTask('build_style', ['stylus', 'cssmin'])
    grunt.registerTask('build_pages', ['before_build', 'pug', 'fontmin'])
    grunt.registerTask('before_build', ['make_config', 'register_pages', 'prepare_pages'])
    grunt.registerTask('server', ['default', 'connect', 'watch'])

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
    resultObj = extend(true,resultObj, { "config" : config })
    resultObj = extend(true,resultObj, { "package" : package })
    resultObj = extend(true,resultObj, { "pages" : register_pages() })
    grunt.file.write( 'docs/info.json' , JSON.stringify( resultObj ) )
    info = resultObj
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

        if( page.attributes.title === undefined || page.attributes.title === null ) page.attributes.title = filename
        if( page.attributes.discription === undefined || page.attributes.discription === null ) page.attributes.description = config.description
        if( page.attributes.date === undefined || page.attributes.date === null ) page.attributes.date = page.stats.birthtime
        if( page.attributes.permalink === undefined || page.attributes.permalink == null ) {
            if( config.page_namingrule == "birthtime" ) {
                let birthtime = new Date(page.attributes.date)
                page.attributes.permalink = `/${subdir}/${`000${birthtime.getFullYear()}`.slice(-4)}-${`0${birthtime.getMonth()+1}`.slice(-2)}-${`0${birthtime.getDay()}`.slice(-2)}-${`0${birthtime.getHours()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getSeconds()}`.slice(-2)}.${`000${birthtime.getMilliseconds()}`.slice(-4)}` 
            } else if( config.page_namingrule == "name" ) {
                if(subdir) page.attributes.permalink = `/${subdir}/${page.srcname}`
                else page.attributes.permalink = `/${page.srcname}`
            } else {
                if(subdir) page.attributes.permalink = `/${subdir}/${page.srcname}`
                else page.attributes.permalink = `/${page.srcname}`
            }
        }
        if( page.attributes.layout === undefined || page.attributes.layout == null ) page.attributes.layout = "default"
        if( page.attributes.published === undefined || page.attributes.published == null ) page.attributes.published = "true"
        if( page.attributes.permalink.indexOf("/") != 0 ) page.attributes.permalink = "/" + page.attributes.permalink
        pages.push(page)
    }
    return pages
}

function prepare_pages(){
    for (let i = 0 ; i < pages.length ; i++) {
        let page = pages[i]
        let layout = page.attributes.layout
        let outdata = ""
        let template
        if(grunt.file.exists(`theme/pug/templates/${layout}.pug`)) template = fs.readFileSync( `theme/pug/templates/${layout}.pug`, 'utf-8' )
        else if(grunt.file.exists(`theme/pug/templates/default.pug`)) template = fs.readFileSync( `theme/pug/templates/default.pug`, 'utf-8' )
        else throw Error
        outdata += `- const page_index_numer = ${i}\n${template}`
        fs.writeFileSync( `${temp_dir}${page.attributes.permalink.replace( /.\//g , "_" )}.pug` , outdata )
    }
}