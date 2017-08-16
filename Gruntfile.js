const package = require('./package.json')
const extend = require('extend')

let grunt = require('grunt')
let fm = require('front-matter')
let crypto = require('crypto')

let join = require('path').join

const config = require('.config/default.json')

var src = {
   'pug': ['src/pug/**/*.pug', '!' + 'src/pug/**/_*.pug'],
   'everypug': 'src/pug/**/*.pug',
   'json': 'config/**/*.json',
   'js': 'src/js/**/*.js',
   'styl': ['src/styl/**/*.styl', '!' + 'src/styl/**/_*.styl'],
   'static': ['src/static/**/*.*'],
   'everystyl': 'src/styl/**/*.styl'
};

var dest = {
    'root': 'docs/',
    'everything': ['docs/**/*.*']
}

module.exports = function(grunt){

    make_config();

    grunt.initConfig({
        clean: {
            build: {
                src: dest.everything
            }
        },
        pug: {
            compile: {
                options: {
                    data: function(dest, src) {
                        return grunt.file.readJSON('./docs/api/v1/index.json');
                    },
                    filters: require('./pugfilters.js'),
                    debug: false,
                    i18n: {
                        locales: "locales/*.json",
                        namespace: "$i18n"
                    }
                },
                files: listPages("pug")
            }
        },
        stylus: {
            compile: {
                options: {
                    import: [
                        'nib'
                    ],
                    "include css": true
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
                    'docs/assets/main.js' : 'src/js/main.js'
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
            files: [src.everypug, src.json, src.everystyl, src.js,'Gruntfile.js'],
            tasks: ['default']
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: '*',
                    base: 'docs'
                }
            }
        },
        fontmin: {
            options: {
                dest: 'docs/assets/fonts/',
                basedir: 'src/fonts/'
            },
            '**/*.ttf':{
                getText: "getBody",
                src: "docs/**/*.html",
            }
        },
        copy: {
            static: {
                expand: true,
                src: ["src/static/**"],
                dest: ["docs/"]
            },
            files: {
                expand: true,
                src: ["files/**"],
                dest: ["docs/files/"]
            }
        }
    });

    
    grunt.loadNpmTasks('./grunt-fontmin')
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-pug-i18n');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.task.registerTask( 'merge-json' , 'Merge all config files' , function(){
        return make_config();
    });

    grunt.task.registerTask( 'rss' , 'Make RSS' , function(){
        grunt.file.write( 'docs/rss2.xml' , drawrss() );
    });
    grunt.task.registerTask( 'sw' , 'Update Service Worker' , function(){
        grunt.file.write( 'docs/sfesWorker.js' , drawsw() );
    });

  //タスクの登録
    grunt.registerTask('default', ['merge-json', 'rss', 'sw', 'browserify', 'uglify', 'stylus', 'cssmin', 'pug', 'webfont']);
    grunt.registerTask('refresh', ['clean', 'default']);
    grunt.registerTask('webfont', ['fontmin']);
    grunt.registerTask('only_script', ['sw', 'browserify', 'uglify']);
    grunt.registerTask('only_style', ['sw', 'stylus', 'cssmin']);
    grunt.registerTask('only_pug', ['merge-json', 'sw', 'pug']);
    grunt.registerTask('server', ['default', 'connect', 'watch']);

function make_config(){
    let resultObj = { options: "" },booksObj = new Array();
    resultObj = extend(true,resultObj, { "package" : config });
    resultObj = extend(true,resultObj, { "package" : package });
    resultObj = extend(true,resultObj, { "pages" : register_pages() });
    grunt.file.write( 'docs/info.json' , JSON.stringify( resultObj ) );
    config = resultObj;
    return config
}

function listPages(mode) {
    if(config == undefined) return false;
    let files = '{',
        text = ''
        sitemaptxt = '{',
        logtext = 'Listing Up Files\n\n';
    for (var i in config.site.pages) {
        files += '"docs/' + config.site.pages[i].id + '.html" : "src/pug/' + config.site.pages[i].id + '.pug"';
        text += 'docs/' + config.site.pages[i].id + '.html,'
        logtext += '' + config.site.pages[i].id + '\n';
        files += ',\n';
    }
    files = files.substr( 0, files.length - 2 );
    text = text.substr( 0, files.length - 1 );
    files += '}';
    console.log(logtext);
    if(mode == "pug") return JSON.parse(files);
    if(mode == "fontmin") return text.split(',');
}

function drawrss() {
    if(config == {}) return false;
    let rss = '<?xml version="1.0" encoding="utf-8"?><rss version="2.0"><channel>',
        now = new Date();
        nowISO = now.toISOString()
    
    rss += `
        <title>${config.site.title}</title>
        <description>${config.site.themeinjp}</description>
        <link>${config.site.URL}</link>
        <language>ja</language>
        <pubDate>${nowISO}</pubDate>
        <lastBuildDate>${nowISO}</lastBuildDate>
        <copyright>${config.package.author}</copyright>
        `;

    config.site.updates.sort(function(a,b) {
        if(a.date < b.date) { return 1 } else { return -1 }
    });
    for( var i in config.site.updates ){
        rss += `
            <item>
            <title>${config.site.updates[i].title}</title>
            <pubDate>${config.site.updates[i].date}</pubDate>
            <description><![CDATA[ ${config.site.updates[i].description}]]></description>
            <link>${config.site.URL}</link>
            <guid isPermaLink="true">${config.site.URL}</guid>
            </item>
            `;
    }
    rss+= '</channel></rss>'
    return rss;
}

function drawsw() {
    let myreturn = "var cachepages = [\n",
        sw = grunt.file.read('./src/js/sw.js'),
        urlstr = grunt.file.read('./src/text/urls.txt'),
        urls = urlstr.split("\n");
    for(var i in urls) {
        if(urls[i] != "") myreturn += '    "' + urls[i].replace(/\s|\n/g, "") + '",\n';
    }
    myreturn.substr( 0, myreturn.length - 5 );
    myreturn += "\n];\nvar version = '" + package.version.replace(/\s|\n/g, "") + "';\n" + sw;
    return myreturn;
}

function drawOS_SDK() {
    let myreturn = "",
        SDK = grunt.file.read('./src/js/OneSignalSW.js');
    myreturn += SDK + "\n//v" + package.version.replace(/\s|\n/g, "");
    return myreturn;
}

function register_pages(){
    let pages = {},pageids = [];
    grunt.file.recurse('./pages/', process );
    function process(abspath, rootdir, subdir, filename){
        let page = {};
        let sha256 = crypto.createHash('sha256');
        sha256.update(filename)
        page.id = hash.digest('hex')
        page.srcname = filename.slice(0,filename.lastIndexOf("."))
        page.srcext = filename.substr(filename.lastIndexOf("."))
        fs.readFile(abspath, 'utf8', function(err, data){
            if (err) throw err
            page = extend(true,page,fm(data));
            page.md5 = function(data){
                var md5hash = crypto.createHash('md5');
                md5hash.update(src, 'binary');
                return md5hash.digest('hex');
            }
        })
        fs.statSync(abspath, function(err, stats){
            if (err) throw err
            page.stats = stats;
        })
        if( !page.title ) page.title = filename
        if(!page.permalink || page.permalink == "") {
            if( config.page_namingrule == "birthtime" ) {
                let time = new Date(page.stats.birthtime)
                page.permalink = `${time.getFullYear}/${time.getMonth + 1}/${time.getDay}/${time.getHours}${time.getMinutes}${time.getMinutes}${time.getSeconds}${time.getMilliseconds}` 
            } else if( config.page_namingrule == "name" ) {
                page.permalink = subdir + page.srcname
            } else if( config.page_namingrule == "atime" ) {
                let time = new Date(page.stats.atime)
                page.permalink = `${time.getFullYear}/${time.getMonth + 1}/${time.getDay}/${time.getHours}${time.getMinutes}${time.getMinutes}` 
            }
        }
        console.log(filename);
    }
}


}