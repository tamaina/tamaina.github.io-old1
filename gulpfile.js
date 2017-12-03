const openCommand = "code"

// npm require
const gulp = require("gulp")
const extend = require("extend")
const fs = require("fs")
const path = require("path")
const del = require("del")
const fm = require("front-matter")
const crypto = require("crypto")
const join = path.join
const swBuild = require("workbox-build")
const exec = require('child_process').exec
const minimist = require("minimist")
const colors = require("colors")
const mergeStream = require('merge-stream')
const mkdirp = require('mkdirp')
const pump = require("pump")
const runSequence = require("run-sequence")
const glob = require("glob")
$ = require("gulp-load-plugins")()

// arg
const argv = minimist(process.argv.slice(2))

// debug
const DEBUG = !!( argv._.indexOf("debug") > -1 || argv.debug )

// グローバル気味変数
let pages = []
let info = {}
let manifest = {}
let package = require("./package.json")
let messages = require("./.config/messages.json")
let site = extend(true,require("./.config/default.json"),require("./.config/own.json"))
const webpackConfig = require("./webpack.config")
const workboxSWSrcPath = require.resolve("workbox-sw")

let temp_dir = "theme/pug/temp/" // 末尾のスラッシュ必要

let src = {
   "everypug": ["theme/pug/**/*.pug","./.temp/**/*.pug"],
   "json": ["config/**/*.json"],
   "js": ["theme/js/**/*.js"],
   "styl_all": ["theme/styl/**/*.styl"],
   "static": ["theme/static/**"],
   "files": ["files/**/*"],
   "filesPrebuilt": ["filesPrebuilt/**/*"],
   "everystyl": ["theme/styl/**/*.styl"],
   "pages": path.join(site.pages_src.path, site.pages_src.src)
}

let dests = {
    "root": "./docs",
    "everything": "./docs/**",
    "info": "./docs/info.json"
}

// メッセージ

function alert_m(type, file, text, callback){
    console.log(`${type}: ${text || callback}`.yellow)
    console.log(`in ${file}`.gray)
}
function info_m(type, file, text, callback){
    console.log(`${type}: ${text || callback}`.cyan)
    console.log(`in ${file}`.gray)
}
function success_m(type, file, text, callback){
    console.log(`${type}: ${text || callback}`.green)
    console.log(`in ${file}`.gray)
}

function existFile(file) {
    try {
        existFile(file)
        return true
    } catch(e) {
        if(e.code === 'ENOENT') return false
    }
}

gulp.task('clean-temp', () => {return del.bind(null, [`${temp_dir}**`])} )
gulp.task('clean-docs', () => {return del.bind(null, [dests.everything])} )
gulp.task('clean-dist', () => {return del.bind(null, ["dist/**/*"])} )

function getHash(data, a, b, c){
    const hashv = crypto.createHash(a)
    hashv.update(data, b)
    return hashv.digest(c)
}

function register_pages(){
    pages = []
    const srcs = glob.sync(src.pages)
    srcs.forEach(doit)
    function doit(val,i,arr){
        const src = path.parse(val)
        let subdir = src.dir.replace(site.pages_src.path, "")
        if(subdir.indexOf('/') == 0 && subdir.length > 0) subdir = subdir.slice(1)
        let page = {}
        page.meta = {}
        if ( !subdir ) subdir = ""
        let file = fs.readFileSync( val, "utf-8" )
        page = extend(true,page,fm(file))
        page.meta.src = src
        page.meta.src.subdir = subdir
        let md5hash = crypto.createHash("md5")
        md5hash.update(file, "binary")
        page.meta.md5 = getHash(file, "md5", "binary", "hex")
        page.meta.sha384 = getHash(file, "sha384", "binary", "base64")
        page.stats = existFile( val )

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
                if(subdir) page.meta.permalink = `/${subdir}/${page.meta.src.name}`
                else page.meta.permalink = `/${page.meta.src.name}`
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

gulp.task('pug', (cd) => {
    pages = register_pages()
    let works = []
    const pugoptions = {
        data:
            extend(
                true,require(dests.info),
                {
                    "messages": messages,
                    "require": require,
                    "DEBUG": DEBUG
                }
            ),
        filters: require('./pugfilters.js')
    }
    mkdirp.sync(temp_dir)
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i]
        const destd = page.meta.permalink.substr(0,page.meta.permalink.slice(0, -1).lastIndexOf('/'))
        let layout = page.attributes.layout
        let outdata = '', ampdata = ''
        if(existFile(`theme/pug/templates/${layout}.pug`)) outdata += `extends ../templates/${layout}.pug`
        else if(existFile(`theme/pug/templates/${site.default.template}.pug`)) outdata += `extends ../templates/${site.default.template}.pug`
        else throw Error("default.pugが見つかりませんでした。")
        outdata += `
block constnum
  - const page_index_numer = ${i}`
        const dest = `${temp_dir}${page.meta.src.subdir.replace( /\//g , '_' )}_${page.meta.src.name}.pug`
        fs.writeFileSync( dest , outdata )
        
        works.push(
            gulp.src(dest)
                .pipe($.rename(`index.html`))
                .pipe($.pug(pugoptions))
                .pipe(gulp.dest( dests.root + destd ))
        )

        /*
         *                            AMP処理部
         *                                                                  */

        if(page.attributes.amp){
            if(existFile(`theme/pug/templates/_amp_${layout}.pug`)) ampdata += `extends ../templates/_amp_${layout}.pug`
            else if(existFile(`theme/pug/templates/_amp_${site.default.template}.pug`)) ampdata += `extends ../templates/_amp_${site.default.template}.pug`
            else throw Error('_amp_default.pugが見つかりませんでした。')
            ampdata += `
block constnum
  - const page_index_numer = ${i}`
            const ampdest = `${temp_dir}${page.meta.src.subdir.replace( /\//g , "_" )}_amp_${page.meta.src.name}.pug`
            fs.writeFileSync( ampdest , ampdata )

            works.push( 
                gulp.src(dest)
                    .pipe($.rename(`amp.html`))
                    .pipe($.pug(pugoptions))
                    .pipe(gulp.dest( dests.root + destd ))
            )
        }
    }
    Promise.all(works).then(cd())
})

gulp.task('css', (cb) => {
    pump([
        gulp.src('theme/styl/main.sass'),
        $.rename('style.min.css'),
        $.sass( { sourceMap: true, outputStyle: 'compressed' } ),
        $.autoprefixer( { browsers: 'last 3 versions' } ),
        gulp.dest(dests.root + "/assets")
    ], cb)
})

gulp.task('js', (cb) => {
    pump([
        gulp.src('theme/js/main.js'),
        $.rename('/assets/style.min.css'),
        $.webpack(),
        $.uglify(),
        gulp.dest(dests.root + "/assets")
    ], cb)
})

gulp.task('watch', () => {
    $.watch(['./**/*'],['debug_override', 'default'])
})

gulp.task('connect', () => {
    connect.server({
        root: 'docs',
        livereload: true
    })
})

gulp.task('copy-theme-static', (cb) => {
    pump([
        gulp.src('theme/static/**/*'),
        gulp.dest(dests.root)
    ], cb)
})
gulp.task('copy-files', (cb) => {
    pump([
        gulp.src('dist/files/**/*'),
        gulp.dest(dests.root + '/files')
    ], cb)
})
gulp.task('copy-prebuildFiles', (cb) => {
    pump([
        gulp.src(src.files),
        gulp.dest('./dist')
    ], cb)
})
gulp.task('copy-wtfpjax', (cb) => {
    pump([
        gulp.src('node_modules/pjax-api/dist/**'),
        gulp.dest(dests.root + '/assets')
    ], cb)
})
gulp.task('f404', (cb) => {
    pump([
        gulp.src('docs/404/index.html'),
        $.rename('404.html'),
        gulp.dest('.')
    ], cb)
})

gulp.task('image-prebuildFiles', (cb) => {
    pump([
        gulp.src('files/**/*.{png,jpg,jpeg,gif,svg}'),
        $.image({
            optipng: false,
            pngquant: ["--speed=1"],
            zopflipng: false,
            jpegRecompress: true,
            mozjpeg: ['-optimize', '-progressive'],
            guetzli: false,
            gifsicle: true,
            svgo: true
        }),
        gulp.dest('./dist/files')
    ])
})

gulp.task('copy-publish', ['copy-theme-static', 'copy-files', 'copy-wtfpjax', 'copy-f404'])
gulp.task('make-subfiles', ['make-sw', 'make-manifest', 'make-browserconfig'])
gulp.task('default', (cb) => {
    runSequence([
        ['clean-docs', 'config'],
        ['js', 'css', 'pug'],
        ['copy-publish', 'make-subfiles', 'clean-temp']
    ], cb)
})

gulp.task('config', (cb) => {
    let resultObj = { options: "" }
    resultObj.timestamp = (new Date()).toJSON()
    resultObj = extend(true,resultObj, { "site" : site })
    resultObj = extend(true,resultObj, { "package" : package })
    resultObj = extend(true,resultObj, { "pages" : register_pages() })
    resultObj = extend(true,resultObj, { "manifest" : register_manifest() })
    fs.writeFile( dests.info, JSON.stringify( resultObj ), cb() )
})

gulp.task( 'debug-override', (cb) => {
    site = extend(true,site,require("./.config/debug_override.json"))
    cb()
})

gulp.task('make-sw', (cb) => {
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
    }).then(cb())
    })
})

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
    return extend(true,manifest,site.manifest)
}

gulp.task('make-manifest', (cb) => {
    fs.writeFile( `docs/manifest.json`, JSON.stringify(register_manifest()), cb )
})

function browserconfig(){
    return `<?xml version="1.0" encoding="utf-8"?>
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
}

gulp.task('make-browserconfig', (cb) => {
    fs.writeFile( `docs/browserconfig.xml`, browserconfig(), cb )
})

gulp.task('new', (cb) => {
    let layout = "", path = argv["path"], thireisfile = false

    if( !argv["path"] ) throw new Error('作成したいファイルのパスを指定してください！')
    if( existFile("pages/" + path) ) throw new Error('ファイルの上書きはやめましょう！')

    if( argv["layout"] ) layout = argv["layout"]
    else layout = "default"

    gulp.src(`templates/${layout}.md`)
    .pipe($.rename(path.slice(path.lastIndexOf("/") + 1)))
    .pipe(gulp.dest("./pages/"))

    let command = `${openCommand} "${"pages/" + path}"`
    let options = {}
    exec( command , options , cb )
})