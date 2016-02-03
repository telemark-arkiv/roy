'use strict'

var miss = require('mississippi')

var setupItem = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  item.distribution.errors = []
  item.distribution.gotRestrictedAddress = false

  console.log('Setup item')

  return callback(null, JSON.stringify(item))
})

module.exports = setupItem
