const openCommand = 'code-insiders'

// npm require
const gulp = require('gulp')
const extend = require('extend')
const fs = require('fs')
const util = require('util')
const promisify = util.promisify
const path = require('path')
const del = require('rimraf')
const fm = require('front-matter')
const crypto = require('crypto')
const join = path.join
const miss = require('mississippi2')
const swBuild = require('workbox-build')
const exec = require('child_process').exec
const minimist = require('minimist')
const merge2 = require('merge2')
const mkdirp = require('mkdirp')
const pump = require('pump')
const glob = require('glob')
$ = require('gulp-load-plugins')()

// promisify

const writeFile = promisify(fs.writeFile)

// arg
const argv = minimist(process.argv.slice(2))

// debug
const DEBUG = !!( argv._.indexOf('debug') > -1 || argv.debug )

// グローバル気味変数
let package = require('./package.json')
let messages = require('./.config/messages.json')
let site = extend(true,require('./.config/default.json'),require('./.config/own.json'),require('./.config/images.json'))
const webpackConfig = require('./webpack.config')
const workboxSWSrcPath = require.resolve('workbox-sw')

let temp_dir = 'theme/pug/temp/' // 末尾のスラッシュ必要

let src = {
   'everypug': ['theme/pug/**/*.pug','./.temp/**/*.pug'],
   'json': ['config/**/*.json'],
   'js': ['theme/js/**/*.js'],
   'styl_all': ['theme/styl/**/*.styl'],
   'static': ['theme/static/**'],
   'files': ['files/**/*'],
   'filesPrebuilt': ['filesPrebuilt/**/*'],
   'everystyl': ['theme/styl/**/*.styl'],
   'pages': path.join(site.pages_src.path, site.pages_src.src)
}

let dests = {
    'root': './dist/docs',
    'everything': './dist/docs/**',
    'info': './dist/docs/info.json'
}

function existFile(file) {
    try {
        fs.statSync(file)
        return true
    } catch(e) {
        if(e.code === 'ENOENT') return false
    }
}

function getHash(data, a, b, c){
    const hashv = crypto.createHash(a)
    hashv.update(data, b)
    return hashv.digest(c)
}

function register_pages(){
    let pages = []
    const srcs = glob.sync(src.pages)
    let srcpath = path.parse(site.pages_src.path)
    srcs.forEach(doit)
    function doit(val,i,arr){
        let page = {}
        const src = path.parse(val)

        let subdir = src.dir.replace(srcpath.base, '')
        if(subdir.indexOf('/') == 0) subdir = subdir.slice(1)
        if ( !subdir ) subdir = ''

        let file = fs.readFileSync( val, 'utf-8' )
        page = extend(true,page,fm(file))

        page.meta = {}
        page.meta.src = src
        page.meta.src.subdir = subdir

        let md5hash = crypto.createHash('md5')
        md5hash.update(file, 'binary')
        page.meta.md5 = getHash(file, 'md5', 'binary', 'hex')
        page.meta.sha384 = getHash(file, 'sha384', 'binary', 'base64')
        page.stats = fs.statSync( val )

        page.body = page.body.replace(/\r\n?/gi,"\n") // 文字コードをLFにそろえる
        delete page.frontmatter

        page.attributes.title = page.attributes.title || page.meta.srcname || null
        page.attributes.description = page.attributes.description || site.description || null
        page.meta.mtime = (new Date(page.attributes.mtime || page.stats.mtime)).toJSON()
        page.meta.birthtime = (new Date(page.attributes.birthtime || page.attributes.date || page.stats.birthtime)).toJSON()

        page.meta.thumbnail = page.meta.thumbnail ? path.parse(page.meta.thumbnail) : null

        if( page.attributes.permalink === undefined || page.attributes.permalink === null ) {
            if( site.page_namingrule == 'birthtime' ) {
                let birthtime = new Date(page.stats.birthtime)
                if(subdir != '') page.meta.permalink = `/${subdir}/${`000${birthtime.getFullYear()}`.slice(-4)}-${`0${birthtime.getMonth()+1}`.slice(-2)}-${`0${birthtime.getDay()}`.slice(-2)}-${`0${birthtime.getHours()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getSeconds()}`.slice(-2)}.${`000${birthtime.getMilliseconds()}`.slice(-4)}` 
                else page.meta.permalink = `/${`000${birthtime.getFullYear()}`.slice(-4)}-${`0${birthtime.getMonth()+1}`.slice(-2)}-${`0${birthtime.getDay()}`.slice(-2)}-${`0${birthtime.getHours()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getMinutes()}`.slice(-2)}-${`0${birthtime.getSeconds()}`.slice(-2)}.${`000${birthtime.getMilliseconds()}`.slice(-4)}` 
            } else if( site.page_namingrule == 'md5' ) {
                if(subdir != '') page.meta.permalink = `/${subdir}/${page.meta.md5}`
                else page.meta.permalink = `/${page.meta.srcname}`
            } else {
                if(subdir != '') page.meta.permalink = `/${subdir}/${page.meta.src.name}`
                else page.meta.permalink = `/${page.meta.src.name}`
            }
        } else { page.meta.permalink = page.attributes.permalink }
        if( page.attributes.layout === undefined || page.attributes.layout === null ) page.attributes.layout = 'default'
        if( page.attributes.published === undefined || page.attributes.published === null ) page.attributes.published = true
        if( page.attributes.draft === undefined || page.attributes.draft === null ) page.attributes.draft = false
        if( page.meta.permalink.indexOf('/') != 0 ) page.meta.permalink = '/' + page.meta.permalink
        if( page.meta.permalink.lastIndexOf('index') == page.meta.permalink.length - 5 && page.meta.permalink.indexOf('index') != -1 ) page.meta.permalink = page.meta.permalink.slice(0,-5)
        else if( page.meta.permalink.lastIndexOf('/') != page.meta.permalink.length - 1 ) page.meta.permalink = page.meta.permalink + '/'
        if( typeof page.attributes.tags === 'string' ) page.attributes.tags = page.attributes.tags.split(' ')
        if( typeof page.attributes.categories === 'string' ) page.attributes.categories = page.attributes.categories.split(' ')
        if( typeof page.attributes.tag === 'string' )
            page.attributes.tags = page.attributes.tag.split(' ')
            delete page.attributes.tag
        if( typeof page.attributes.category === 'string' )
            page.attributes.categories = page.attributes.category.split(' ')
            delete page.attributes.category
        pages.push(page)
    }
    return pages
}

function register_manifest(){
    let icons = []
    for (let i = 0 ; i < site.icons.length ; i++) {
        let icon = site.icons[i]
        icon.src = site.url.path + icon.path
        delete icon.path
        icons.push(icon)
    }
    let manifest = {
        'name': site.name,
        'short_name': site.short_name,
        'icons': icons,
        'start_url': site.url.path,
        'theme_color': site.theme_color.primary,
        'background_color': site.theme_color.primary
    }
    manifest = extend(true,manifest,site.manifest)
    return manifest
}

let manifest = register_manifest()
let pages = register_pages()

gulp.task('reregister', (cb) => {
    manifest = register_manifest()
    pages = register_pages()
    cb()
})

gulp.task('pug', (cd) => {
    let works = []
    mkdirp.sync(temp_dir)
    let stream = merge2()
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i]
        const pugoptions = {
            data: 
                {
                    'page': page,
                    'site' : site,
                    'package' : package,
                    'pages' : pages,
                    'manifest' : manifest,
                    "messages": messages,
                    "require": require,
                    "DEBUG": DEBUG
                },
            filters: require('./pugfilters.js')
        }

        let layout = page.attributes.layout
        let template = '', amptemplate = ''
        if(existFile(`theme/pug/templates/${layout}.pug`)) template += `theme/pug/templates/${layout}.pug`
        else if(existFile(`theme/pug/templates/${site.default.template}.pug`)) template += `theme/pug/templates/${site.default.template}.pug`
        else throw Error('default.pugが見つかりませんでした。')
        stream.add(
            gulp.src(template)
                .pipe(
                    $.plumber({
                        errorHandler: $.notify.onError("Error: <%= error.message %>")
                    })
                )
                .pipe($.pug(pugoptions))
                .pipe($.rename(`${page.meta.permalink}index.html`))
                .pipe(gulp.dest( dests.root ))
                .on('end',() => {
                    $.util.log($.util.colors.green(`✔ ${page.meta.permalink}`))
                })
        )

        /*
         *                            AMP処理部
         *                                                                  */

        if(page.attributes.amp){
            if(existFile(`theme/pug/templates/_amp_${layout}.pug`)) amptemplate += `theme/pug/templates/_amp_${layout}.pug`
            else if(existFile(`theme/pug/templates/_amp_${site.default.template}.pug`)) amptemplate += `theme/pug/templates/_amp_${site.default.template}.pug`
            else throw Error('_amp_default.pugが見つかりませんでした。')

            stream.add(
                gulp.src(amptemplate)
                    .pipe(
                        $.plumber({
                            errorHandler: $.notify.onError("Error: <%= error.message %>")
                        })
                    )
                    .pipe($.pug(pugoptions))
                    .pipe($.rename(`${page.meta.permalink}amp.html`))
                    .pipe(gulp.dest( dests.root ))
                    .on('end',() => {
                        $.util.log($.util.colors.green(`✔ ${page.meta.permalink}amp.html`))
                    })
            )
        }
    }
    return stream
})

gulp.task('css', (cb) => {
    pump([
        gulp.src('theme/styl/main.sass'),
        $.sass( { sourceMap: true, outputStyle: 'compressed' } ),
        $.autoprefixer( { browsers: 'last 3 versions' } ),
        $.rename('style.min.css'),
        gulp.dest(dests.root + '/assets')
    ], () => {
        $.util.log($.util.colors.green(`✔ assets/style.min.css`))
        cb()
    })
})

gulp.task('js', (cb) => {
    pump([
        gulp.src('theme/js/main.js'),
        $.webpack(),
        $.rename('main.js'),
        $.babel({presets: ['babel-preset-env'], plugins: ['transform-remove-strict-mode'], compact: false}),
        gulp.dest(dests.root + '/assets'),
        $.uglify(),
        $.rename('main.min.js'),
        gulp.dest(dests.root + '/assets')
    ], () => {
        $.util.log($.util.colors.green(`✔ assets/main.js`))
        $.util.log($.util.colors.green(`✔ assets/main.min.js`))
        cb()
    })
})

gulp.task('watch', (cb) => {
    gulp.watch(['theme/**/*',`!${temp_dir}**/*`,'pages/**/*','./.config/**/*'], gulp.series(gulp.parallel('wait-5sec','reregister'),'default',(cb)=>{cb()}))
    gulp.watch(['files/**/*'], gulp.series('wait-5sec','prebuild-files',(cb)=>{cb()}))
})

gulp.task('connect', () => {
    $.connect.server({
        root: 'docs',
        livereload: true
    })
})

gulp.task('copy-docs', (cb) => {
    pump([
        gulp.src('dist/docs/**/*'),
        gulp.dest('./docs')
    ], cb)
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
gulp.task('copy-wtfpjax', (cb) => {
    pump([
        gulp.src('node_modules/pjax-api/dist/**'),
        gulp.dest(dests.root + '/assets')
    ], cb)
})
gulp.task('copy-f404', (cb) => {
    pump([
        gulp.src('dist/docs/404/index.html'),
        $.rename('404.html'),
        gulp.dest('.')
    ], cb)
})
gulp.task('copy-prebuildFiles', (cb) => {
    pump([
        gulp.src(src.files),
        gulp.dest('./dist/files')
    ], cb)
})

gulp.task('image-prebuildFiles', (cb) => {
    const images_allFalse = {
        "optipng": false,
        "pngquant": false,
        "zopflipng": false,
        "jpegRecompress": false,
        "mozjpeg": false,
        "guetzli": false,
        "gifsicle": false,
        "svgo": false
    }
    const sizes = site.images.files.sizes
    const stream = gulp.src('files/**/*.{png,jpg,jpeg}')
                .pipe($.image(site.images.files.all.image ? extend(true,images_allFalse,site.images.files.all.image) : images_allFalse))
    const stream2 = merge2()
    for(i = 0; i < sizes.length; i++){
        stream2.add(
            stream
            .pipe($.imageResize(sizes[i].resize || {}))
            .pipe($.rename(sizes[i].rename || {}))
            .pipe($.image(sizes[i].image ? extend(true,images_allFalse,sizes[i].image) : images_allFalse))
            .pipe(gulp.dest('dist/files'))
        )
    }
    stream2.add(
        gulp.src('files/**/*.{gif,svg}')
        .pipe($.image({
            "gifsicle": true,
            "svgo": true
        }))
        .pipe(gulp.dest('dist/files'))
    )

    return stream2
})

gulp.task('clean-temp', (cb) => { del(temp_dir, cb) } )
gulp.task('clean-docs', (cb) => { del('docs/', cb) } )
gulp.task('clean-dist-docs', (cb) => { del('dist/docs/', cb) } )
gulp.task('clean-dist-files', (cb) => { del('dist/files/', cb) } )

gulp.task('config', (cb) => {
    let resultObj = { options: '' }
    resultObj.timestamp = (new Date()).toJSON()
    resultObj = extend(true,resultObj, { 'pages' : pages })
    mkdirp.sync(path.parse(dests.info).dir)
    return writeFile( dests.info, JSON.stringify( resultObj ))
    .then(
        () => { $.util.log($.util.colors.green(`✔ info.json`)) },
        (err) => { $.util.log($.util.colors.red(`✖ info.json`)); console.log(err) }
    )
})

gulp.task( 'debug-override', (cb) => {
    site = extend(true,site,require('./.config/debug_override.json'))
    cb()
})

gulp.task('make-sw', (cb) => {
    // twbs/bootstrapより借用

    const buildPrefix = 'dist/docs/'
    const config = {
        'globDirectory': './dist/docs/',
        'globPatterns': [
          '**/*.{html,css,js,json,png,jpg,jpeg}'
        ],
        'globIgnores': [
          'files/**/*.{html,css,js,json,png,jpg,jpeg}'
        ],
        'swSrc': 'theme/js/sw.js',
        'swDest': 'dist/docs/service_worker.js'
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
        const regex = new RegExp(buildPrefix, 'g')
        entry.url = entry.url.replace(regex, '')
    }
    return entry
    })

    config.manifestTransforms = [updateUrl]

    swBuild.injectManifest(config).then(() => {
    const wbSwRegex = /{path}/g
    fs.readFile(config.swDest, 'utf8', (err, data) => {
        if (err) {
        throw err
        }
        const swFileContents = data.replace(wbSwRegex, workboxSWWrite)
        fs.writeFile(config.swDest, swFileContents, () => {
        $.util.log($.util.colors.green(`✔ service_worker.js`)); cb()
        cb()
        })
    })
    })
})

gulp.task('make-manifest', (cb) => {
    return writeFile( `dist/docs/manifest.json`, JSON.stringify(manifest))
    .then(
        () => { $.util.log($.util.colors.green(`✔ manifest.json`)) },
        (err) => { $.util.log($.util.colors.red(`✖ manifest.json`)); console.log(err) }
    )
})

const browserconfigXml = () => {
    return `<?xml version='1.0' encoding='utf-8'?>
    <browserconfig>
      <msapplication>
        <tile>
          <square70x70logo src='${site.url.path}${site.mstiles.s70x70.path}'/>
          <square144x144logo src='${site.url.path}${site.mstiles.s144x144.path}'/>
          <square150x150logo src='${site.url.path}${site.mstiles.s150x150.path}'/>
          <square310x310logo src='${site.url.path}${site.mstiles.s310x310.path}'/>
          <wide310x150logo src='${site.url.path}${site.mstiles.w310x150.path}'/>
          <TileColor>${site.theme_color.secondary}</TileColor>
        </tile>
      </msapplication>
    </browserconfig>`
}

gulp.task('make-browserconfig', (cb) => {
    fs.writeFile( `dist/docs/browserconfig.xml`, browserconfigXml, () => {
        $.util.log($.util.colors.green(`✔ browserconfig.xml`)); cb()
    })
})

gulp.task('new', (cb) => {
    let layout = '', path = argv['path'], thireisfile = false
    if( !argv['path'] ) throw new Error('作成したいファイルのパスを指定してください！')
    if( existFile(site.pages_src.path + path) ) throw new Error('ファイルの上書きはやめましょう！')

    if( argv['layout'] ) layout = argv['layout']
    else layout = 'default'

    gulp.src(`templates/${layout}.md`)
    .pipe($.rename(path))
    .pipe(gulp.dest(site.pages_src.path))
    .on('end', () => {
        let command = `${openCommand} "${site.pages_src.path}${path}"`
        let options = {}
        exec( command, options, cb )
    })
})

function wait4(cb, sec){
    let interval = null
    process.stdout.write($.util.colors.green(` ${sec} ██████    \r`))
    function waiti(){
        sec--
        if( sec < 0 && interval != null ){
            process.stdout.write(`\r`)
            cb()
            clearInterval(interval)
        }
        else if ( sec == 0 ) process.stdout.write($.util.colors.red(`\r ${sec}              \r`))
        else if ( sec == 1 ) process.stdout.write($.util.colors.red(`\r ${sec}  █            \r`))
        else if ( sec == 2 ) process.stdout.write($.util.colors.red(`\r ${sec}  ██          \r`))
        else if ( sec == 3 ) process.stdout.write($.util.colors.red(`\r ${sec}  ███        \r`))
        else if ( sec == 4 ) process.stdout.write($.util.colors.yellow(`\r ${sec}  ████      \r`))
        else if ( sec == 5 ) process.stdout.write($.util.colors.yellow(`\r ${sec}  █████    \r`))
        else process.stdout.write($.util.colors.green(`\r ${sec}  ██████    `))
    }
    interval = setInterval(waiti, 1000)
}

gulp.task('wait-5sec', (cb) => {
    wait4(cb, 5)
})

gulp.task('wait-10sec', (cb) => {
    wait4(cb, 10)
})


gulp.task('last',
    gulp.series(
        'clean-docs',
        'copy-docs',
        'clean-dist-docs',
        (cb) => { cb() } 
    )
)

gulp.task('copy-publish',
    gulp.series(
        gulp.parallel(
            'copy-theme-static',
            'copy-files',
            'copy-wtfpjax',
            'copy-f404'
        ),
        (cb) => { cb() } 
    )
)
gulp.task('make-subfiles',
    gulp.series(
        gulp.parallel(
            'make-manifest',
            'make-browserconfig'
        ),
        (cb) => { cb() } 
    )
)

gulp.task('core',
    gulp.series(
        gulp.parallel('js', 'css', 'pug'),
        gulp.parallel('clean-temp', 'copy-publish', 'make-subfiles'),
        'make-sw', 'last',
        (cb) => { cb() }
    )
)
gulp.task('default',
    gulp.series(
        'config',
        'core',
        (cb) => { cb() }
    )
)

gulp.task('prebuild-files',
    gulp.series(
        'clean-dist-files',
        'copy-prebuildFiles',
        'image-prebuildFiles',
        (cb) => { cb() } 
    )
)

gulp.task('watch',
    gulp.series(
        'config',
        'core',
        'watch',
        (cb) => { cb() } 
    )
)

gulp.task('local-server',
    gulp.series(
        'config', 'debug-override',
        'core',
        gulp.parallel('connect', 'watch'),
        (cb) => { cb() } 
    )
)
