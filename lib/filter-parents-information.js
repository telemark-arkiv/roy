'use strict'

var miss = require('mississippi')

var filterParentsInformation = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var list = []

  item.dsfParents.forEach(function (parent) {
    if (parseInt(parent['STAT-KD'], 10) === 1) {
      list.push(parent)
    }
  })

  item.dsfParents = list

  console.log(item._id + ': filter-parents-information')

  return callback(null, JSON.stringify(item))
})

module.exports = filterParentsInformation
