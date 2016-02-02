'use strict'

var miss = require('mississippi')

var setupItem = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  if (!item.errors) {
    item.errors = []
  }

  console.log('Setup item')

  item.distribution.gotRestrictedAddress = false

  return callback(null, JSON.stringify(item))
})

module.exports = setupItem
