var fs = require("fs");
var kramed = require('kramed');
var pugfilters = module.exports = {};

pugfilters.md = function(str) {
    return kramed(str).replace(/\r?\n/g,"");
};
pugfilters.oneline = function(str) {
    return str.replace(/\r?\n/g,"");
}