var deburr = require('lodash.deburr');
module.exports = function(item) { return deburr(item).replace(/\W+/g, "").toLowerCase().trim() };
