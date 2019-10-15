const _ = require('lodash')

module.exports = function(array=[], size) {
    return _.chunk(array,size)
}