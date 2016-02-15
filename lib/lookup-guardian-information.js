'use strict'

var miss = require('mississippi')

var lookupGuardianInformation = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var contact = item.dsfContact
  var guardian

  item.dsfParents.forEach(function (parent) {
    if (contact.ADR === parent.ADR && contact.POSTN === parent.POSTN && contact.POSTS === parent.POSTS) {
      guardian = parent
    }
  })

  item.dsfGuardian = guardian

  console.log(item._id + ': lookup-guardian-information')

  return callback(null, JSON.stringify(item))
})

module.exports = lookupGuardianInformation
