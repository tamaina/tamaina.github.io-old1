// newでファイルを開くときに使うプログラム
const openCommand = "code"

// npm require
const grunt = require("grunt")
const extend = require("extend")
const fs = require("fs")
const fm = require("front-matter")
const crypto = require("crypto")
const path = require("path")
const join = path.join
const swBuild = require("workbox-build")
const exec = require('child_process').exec
require('load-grunt-tasks')(grunt);

// debug
const DEBUG = !!grunt.option("debug")

// グローバル気味変数
let pages = []
let info = {}
let manifest = {}
let package = require("./package.json")
let messages = require("./.config/messages.json")
let site = extend(true,require("./.config/default.json"),require("./.config/own.json"))
let temp_dir = "theme/pug/temp" // 末尾のスラッシュ不要
const webpackConfig = require("./webpack.config")
const workboxSWSrcPath = require.resolve("workbox-sw")

let src = {
   "everypug": ["theme/pug/**/*.pug","./.temp/**/*.pug"],
   "json": ["config/**/*.json"],
   "js": ["theme/js/**/*.js"],
   "styl_all": ["theme/styl/**/*.styl"],
   "static": ["theme/static/**"],
   "files": ["files/**/*"],
   "filesPrebuilt": ["filesPrebuilt/**/*"],
   "everystyl": ["theme/styl/**/*.styl"],
   "pages": site.sources
}

let dests = {
    "root": "docs/",
    "everything": "docs/**",
    "info": "docs/info.json"
}
module.exports = function(grunt){
    grunt.initConfig({
        clean: {
            temp: {
                src: [`${temp_dir}/**`]
            },
            docs: {
                src: [dests.everything]
            },
            dist: {
                src: ["dist/**/*"]
            }
        },
        parallelize: {
            pug: {
                compile: 8
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
                                    "messages": messages,
                                    "require": require,
                                    "DEBUG": DEBUG
                                }
                            )
                        },
                    filters: require("./pugfilters.js"),
                    debug: false
                },
                files: pugfiles()
            }
        },
        sass: {
            compile: {
                options: {
                    sourceMap: true
                },
                files: {
                    "docs/assets/style.css": "theme/styl/main.sass"
                }
            }
        },
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: "docs/assets/style.css",
                dest: "docs/assets/style.min.css"
            }
        },
        webpack: {
          options: {
            stats: !process.env.NODE_ENV || process.env.NODE_ENV === "development"
          },
          prod: webpackConfig,
          dev: Object.assign({ watch: true }, webpackConfig)
        },
        watch: {
            any: {
                files: ["./**/*"],
                tasks: ["debug_override", "default"]
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: "*",
                    base: "docs/"
                }
            }
        },
        copy: {
            main: {
                files:[
                    {
                        expand: true,
                        cwd: "theme/static/",
                        src: "**",
                        dest: "docs/"
                    },
                    {
                        expand: true,
                        cwd: "dist/files/",
                        src: "**",
                        dest: "docs/files/"
                    }
                ]
            },
            filesPrebuild: {
                files:[
                    {
                        expand: true,
                        src: src.files,
                        dest: "dist/"
                    }
                ]
            },
            wtfpjax: {
                files:[
                    {
                        expand: true,
                        cwd:"node_modules/pjax-api/dist/",
                        src: "**",
                        dest: "docs/assets/"
                    }
                ]
            },
            f404: {
                files: [
                    {
                        src: "docs/404/index.html",
                        dest: "404.html"
                    }
                ]
            }
        },
        image: {
            filesPrebuild: {
                options: {
                    optipng: false,
                    pngquant: ["--speed=1"],
                    zopflipng: false,
                    jpegRecompress: true,
                    mozjpeg: ['-optimize', '-progressive'],
                    guetzli: false,
                    gifsicle: true,
                    svgo: true
                },
                files: [{
                    expand: true,
                    cwd: "files/",
                    src: ["**/*.{png,jpg,jpeg,gif,svg}"],
                    dest: "dist/files/"
                }]
            }
        }
    })
}

    grunt.task.registerTask( "make_config" , "Merge all config files" , make_config )
    grunt.task.registerTask( "prepare_pages" , "Prepare Pages" , prepare_pages )
    grunt.task.registerTask( "debug_override" , "Debug" , () => {
        site = extend(true,site,require("./.config/debug_override.json"))
    })
    grunt.task.registerTask( "sw" , "Write service worker" , workboxer )

    // 以下はmake_config実行時に自動実行
    // コマンドで動かす用に一応登録
    grunt.task.registerTask( "register_pages" , "Register Pages" , register_pages )
    grunt.task.registerTask( "register_manifest" , "Register and write manifest.json" , register_manifest )
    grunt.task.registerTask( "make_browserconfig" , "Make Browserconfig" , make_browserconfig )
    grunt.task.registerTask( "new" , "Add a page" , newpage )

    // タスクの登録
    grunt.registerTask("default", ["clean:temp", "clean:docs", "before_build", "build_script", "build_style", "parallelize:pug:compile", "copy:main", "copy:wtfpjax", "copy:f404", "sw", "clean:temp"])
    grunt.registerTask("filesPrebuild", ["clean:dist", "copy:filesPrebuild", "image:filesPrebuild"])
    grunt.registerTask("before_build", ["make_config", "prepare_pages"])
    grunt.registerTask("server", ["debug_override", "default", "connect", "watch"])

    // 以下の2種類でデプロイとして供さないこと(defaultタスクを必ず実行)
    grunt.registerTask("build_script", ["webpack:prod"/*, "uglify"*/])
    grunt.registerTask("build_style", ["sass", "postcss"])

    grunt.registerTask("build_pages", ["before_build", "parallelize:pug:compile"])

function make_config(){
    let resultObj = { options: "" }
    resultObj.timestamp = (new Date()).toJSON()
    resultObj = extend(true,resultObj, { "site" : site })
    resultObj = extend(true,resultObj, { "package" : package })
    resultObj = extend(true,resultObj, { "pages" : register_pages() })
    resultObj = extend(true,resultObj, { "manifest" : register_manifest() })
    grunt.file.write( dests.info , JSON.stringify( resultObj ) )
    info = resultObj

    make_browserconfig()

    return info
}

function getHash(data, a, b, c){
    const hashv = crypto.createHash(a)
    hashv.update(data, b)
    return hashv.digest(c)
}

function register_pages(){
    pages = []
    grunt.file.recurse("./pages/", process )
    function process(abspath, rootdir, subdir, filename){
        // if ( filename == "template.pug" ) return false
        let page = {}
        page.meta = {}
        if ( !subdir ) subdir = ""
        let file = fs.readFileSync( abspath, "utf-8" )
        page = extend(true,page,fm(file))
        page.meta.srcname = filename.slice(0,filename.lastIndexOf("."))
        page.meta.srcext = filename.substr(filename.lastIndexOf("."))
        page.meta.subdir = subdir
        let md5hash = crypto.createHash("md5")
        md5hash.update(file, "binary")
        page.meta.md5 = getHash(file, "md5", "binary", "hex")
        page.meta.sha384 = getHash(file, "sha384", "binary", "base64")
        page.stats = fs.statSync( abspath )

        page.attributes.title = page.attributes.title || page.meta.srcname
        page.attributes.description = page.attributes.description || site.description
        page.meta.mtime = (new Date(page.attributes.mtime || page.stats.mtime)).toJSON()
        page.meta.birthtime = (new Date(page.attributes.birthtime || page.attributes.date || page.stats.birthtime)).toJSON()

        if( page.attributes.permalink === undefined || page.attributes.permalink === null ) {
            if( site.page_namingrule == "birthtime" ) {
                let birthtime = new Date(page.stats.birthtime)
                if(subdir) page.meta.permalink = `/${subdir}/${`000${birthtime.getFullYear()}`.slice(-4)}-${`0${birthtime.getMonth()+1}`.slice(-2)}-${`0${birthtime.getDay()}`.slice(-2)}-${`0${birthtime.getHours()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getSeconds()}`.slice(-2)}.${`000${birthtime.getMilliseconds()}`.slice(-4)}` 
                else page.meta.permalink = `/${`000${birthtime.getFullYear()}`.slice(-4)}-${`0${birthtime.getMonth()+1}`.slice(-2)}-${`0${birthtime.getDay()}`.slice(-2)}-${`0${birthtime.getHours()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getSeconds()}`.slice(-2)}.${`000${birthtime.getMilliseconds()}`.slice(-4)}` 
            } else if( site.page_namingrule == "md5" ) {
                if(subdir) page.meta.permalink = `/${subdir}/${page.meta.md5}`
                else page.meta.permalink = `/${page.meta.srcname}`
            } else {
                if(subdir) page.meta.permalink = `/${subdir}/${page.meta.srcname}`
                else page.meta.permalink = `/${page.meta.srcname}`
            }
        } else { page.meta.permalink = page.attributes.permalink }
        if( page.attributes.layout === undefined || page.attributes.layout === null ) page.attributes.layout = "default"
        if( page.attributes.published === undefined || page.attributes.published === null ) page.attributes.published = true
        if( page.attributes.draft === undefined || page.attributes.draft === null ) page.attributes.draft= false
        if( page.meta.permalink.indexOf("/") != 0 ) page.meta.permalink = "/" + page.meta.permalink
        if( page.meta.permalink.lastIndexOf("index") == page.meta.permalink.length - 5 && page.meta.permalink.indexOf("index") != -1 ) page.meta.permalink = page.meta.permalink.slice(0,-5)
        else if( page.meta.permalink.lastIndexOf("/") != page.meta.permalink.length - 1 ) page.meta.permalink = page.meta.permalink + "/"
        if( typeof page.attributes.tags === "string" ) page.attributes.tags = page.attributes.tags.split(" ")
        if( typeof page.attributes.categories === "string" ) page.attributes.categories = page.attributes.categories.split(" ")
        if( typeof page.attributes.tag === "string" )
            page.attributes.tags = page.attributes.tag.split(" ")
            delete page.attributes.tag
        if( typeof page.attributes.category === "string" )
            page.attributes.categories = page.attributes.category.split(" ")
            delete page.attributes.category
        pages.push(page)
    }
    return pages
}


function temppath(page, temp_dir, amp){
    if(amp == false || amp === undefined){
        return `${temp_dir}/${page.meta.subdir.replace( /\//g , "_" )}_${page.meta.srcname}.pug`
    } else {
        return `${temp_dir}/${page.meta.subdir.replace( /\//g , "_" )}_amp_${page.meta.srcname}.pug`
    }
}

function prepare_pages(){
    for (let i = 0 ; i < pages.length ; i++) {
        let page = pages[i]
        let layout = page.attributes.layout
        let outdata = "", ampdata = ""
        if(grunt.file.exists(`theme/pug/templates/${layout}.pug`)) outdata += `extends ../templates/${layout}.pug`
        else if(grunt.file.exists(`theme/pug/templates/${site.default.template}.pug`)) outdata += `extends ../templates/${site.default.template}.pug`
        else throw Error("default.pugが見つかりませんでした。")
        outdata += `
block constnum
  - const page_index_numer = ${i}`
        grunt.file.write( temppath(page, temp_dir) , outdata )

        if(page.attributes.amp){
            if(grunt.file.exists(`theme/pug/templates/_amp_${layout}.pug`)) ampdata += `extends ../templates/_amp_${layout}.pug`
            else if(grunt.file.exists(`theme/pug/templates/_amp_${site.default.template}.pug`)) ampdata += `extends ../templates/_amp_${site.default.template}.pug`
            else throw Error("_amp_default.pugが見つかりませんでした。")
            ampdata += `
block constnum
  - const page_index_numer = ${i}`
            grunt.file.write( temppath(page, temp_dir, true) , ampdata )
        }
    }
}

function pugfiles() {
    register_pages()
    let out = "{"
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i]
        out += `"docs/${page.meta.permalink}index.html" : "${temppath(page, temp_dir)}",`
        if(page.attributes.amp){
            out += `"docs/${page.meta.permalink}amp.html" : "${temppath(page, temp_dir, true)}",`
        }
    }
    out = out.substr( 0, out.length - 1 ) 
    out += "}"
    return JSON.parse(out)
}

function workboxer(){

    // twbs/bootstrapより借用

    const buildPrefix = "docs/"
    const config = {
        "globDirectory": "./",
        "globPatterns": [
          "docs/**/*.{html,css,js,json,png,jpg,jpeg}"
        ],
        "swSrc": "theme/js/sw.js",
        "swDest": "docs/service_worker.js"
     }

    const wbFileName = path.basename(workboxSWSrcPath)
    const workboxSWDestDir = `${buildPrefix}/`
    const workboxSWDestPath = `${workboxSWDestDir}${wbFileName}`
    const workboxSWWrite = `${site.url.path}/${wbFileName}`
    const workboxSWSrcMapPath = `${workboxSWSrcPath}.map`
    const workboxSWDestMapPath = `${workboxSWDestPath}.map`

    fs.createReadStream(workboxSWSrcPath).pipe(fs.createWriteStream(workboxSWDestPath))
    fs.createReadStream(workboxSWSrcMapPath).pipe(fs.createWriteStream(workboxSWDestMapPath))

    const updateUrl = (manifestEntries) => manifestEntries.map((entry) => {
    if (entry.url.startsWith(buildPrefix)) {
        const regex = new RegExp(buildPrefix, "g")
        entry.url = entry.url.replace(regex, "")
    }
    return entry
    })

    config.manifestTransforms = [updateUrl]

    swBuild.injectManifest(config).then(() => {
    const wbSwRegex = /{path}/g
    fs.readFile(config.swDest, "utf8", (err, data) => {
        if (err) {
        throw err
        }
        const swFileContents = data.replace(wbSwRegex, workboxSWWrite)
        fs.writeFile(config.swDest, swFileContents, () => {
        console.log("Pre-cache Manifest generated.")
        })
    })
    })
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
        "background_color": site.theme_color.primary
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

function newpage(){
    let layout = "", path = "pages/" + grunt.option("path"), thireisfile = false
    let done = this.async();

    if( !path ) throw new Error('作成したいファイルのパスを指定してください！')
    try{ grunt.file.read(path) } catch(e) { thireisfile = true }
    if( !thireisfile ) throw new Error('ファイルの上書きはやめましょう！')

    if( grunt.option("layout") ) layout = grunt.option("layout")
    else layout = "default"

    grunt.file.copy(`templates/${layout}.md`,path)

    let command = `${openCommand} "${path}"`
    let options = {}
    exec( command , options , (e,so,se) => done() )
}