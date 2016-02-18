'use strict'

var miss = require('mississippi')
var isHemmelig = require('tfk-is-hemmelig-adresse')

var lookupRestrictedAddress = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var restrictedDsf = isHemmelig(item.dsfContact)
  var restricted360 = item.p360Contact ? isHemmelig(item.p360Contact) : false

  console.log(item._id + ': lookup-restricted-address')

  item.gotRestrictedAddress = restricted360 || restrictedDsf

  if (item.gotRestrictedAddress) {
    item.CALLBACK_STATUS_MESSAGE = 'Sendt til manuell distribusjon'
  }

  return callback(null, JSON.stringify(item))
})

module.exports = lookupRestrictedAddress
