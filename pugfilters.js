const fs = require("fs");
const kramed = require('kramed');
const uglifyjs = require('uglify-js');
const pugfilters = module.exports = {};

pugfilters.md = function(str) {
    return kramed(str).replace(/\r?\n/g,"");
};
pugfilters.oneline = function(str) {
    return str.replace(/\r?\n/g,"");
}
pugfilters.uglifyjs = function(str) {
    return str.uglifyjs();
}