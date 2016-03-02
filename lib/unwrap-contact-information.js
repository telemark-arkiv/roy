'use strict'

var miss = require('mississippi')
var unwrap360Contact = require('tfk-360-unwrap-contact')
var unwrapDsfContact = require('tfk-dsf-unwrap-contact')

var unwrapContactInformation = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  if (item.dsfError) {
    return callback(null, JSON.stringify(item))
  }

  item.p360Contact = unwrap360Contact(item.p360Data)
  item.dsfContact = unwrapDsfContact(item.dsfData)

  return callback(null, JSON.stringify(item))
})

module.exports = unwrapContactInformation
