
const pugfilters = module.exports = {}
const kramed = require('kramed')

pugfilters.md = function(str) {
    return kramed(str)
};
pugfilters.oneline = function(str) {
    return str.replace(/\r?\n/g,"")
}
pugfilters.css_amp = function(str) {
    return str.replace(/!important/g,"").replace(/@charset "UTF-8";/g,"").replace(/@-ms-viewport{width:device-width}/g,"")
}

/* 利用中 */
const hljs = require('highlight.js')
const URL = require('url')
const pug_api = require("pug")
const htmlmin = require("html-minifier").minify
const summaly = require("sync-summaly").default
const $$ = require("cafy").default
const cheerio = require("cheerio")
const colors = require("colors")
const sizeOf = require("image-size")
const jst_cleancss = require("jstransformer-clean-css")
const jst_highlight = require("jstransformer-highlight")
const jst_sass = require("jstransformer-sass")
const jst_uglifyjs = require("jstransformer-uglify-js")
