'use strict'

var miss = require('mississippi')

var setupItem = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  item.errors = []
  item.recipients = []
  item.gotRestrictedAddress = true
  item.CALLBACK_STATUS_MESSAGE = 'Til distribusjon'

  console.log(item._id + ': setup-item')

  return callback(null, JSON.stringify(item))
})

module.exports = setupItem
