'use strict'

var miss = require('mississippi')
var unwrapParents = require('tfk-dsf-unwrap-parents')

var unwrapDsfParents = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  item.dsfParents = unwrapParents(item.dsfData)

  console.log(item._id + ': unwrap-parents-information')

  return callback(null, JSON.stringify(item))
})

module.exports = unwrapDsfParents
