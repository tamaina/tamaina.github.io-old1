const fs = require("fs");
const kramed = require('kramed');
const pugfilters = module.exports = {};

pugfilters.md = function(str) {
    return kramed(str).replace(/\r?\n/g,"");
};
pugfilters.oneline = function(str) {
    return str.replace(/\r?\n/g,"");
}