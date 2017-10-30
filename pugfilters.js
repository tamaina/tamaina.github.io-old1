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
pugfilters.uglifyjs = function(str) {
    return str.uglifyjs()
}
pugfilters.highlight = function(str) {
    return hljs.highlightAuto(str)
}