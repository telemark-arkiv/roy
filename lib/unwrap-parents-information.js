'use strict'

const miss = require('mississippi')
const unwrapParents = require('tfk-dsf-unwrap-parents')

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  if (item.dsfError) {
    return callback(null, JSON.stringify(item))
  }

  item.dsfParents = unwrapParents(item.dsfData)

  console.log(item._id + ': unwrap-parents-information')

  return callback(null, JSON.stringify(item))
})
