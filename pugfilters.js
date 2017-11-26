const fs = require("fs")
const kramed = require('kramed')
const uglifyjs = require('uglify-js')
const pugfilters = module.exports = {}
const hljs = require('highlight.js')

pugfilters.md = function(str) {
    return kramed(str)
};
pugfilters.oneline = function(str) {
    return str.replace(/\r?\n/g,"")
}
pugfilters.css_amp = function(str) {
    return str.replace(/ !important/g,"").replace(/@charset "UTF-8";/g,"").replace(/@-ms-viewport{width:device-width}/g,"")
}