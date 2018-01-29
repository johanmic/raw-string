const _ = require('lodash');
console.log('hello');
module.exports = function(item) { return _.deburr(item).replace(/\W+/g, "").toLowerCase().trim() };
