'use strict'

const miss = require('mississippi')

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  item.errors = []
  item.recipients = []
  item.gotRestrictedAddress = true
  item.noGuardianFound = false
  item.CALLBACK_STATUS_MESSAGE = 'Sendt via SvarUt'

  console.log(item._id + ': ' + item.recipientName)
  console.log(item._id + ': setup-item')

  return callback(null, JSON.stringify(item))
})
