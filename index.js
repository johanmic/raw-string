const _ = require('lodash');
module.exports = function(item) { return _.deburr(item).replace(/\W+/g, "").toLowerCase().trim() };
