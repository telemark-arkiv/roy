'use strict'

var miss = require('mississippi')

var setupArchive = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  if (item.sendCopyToGuardian && item.dsfGuardian) {
    console.log(item._id + ': setup-archive. Adds guardian')
    var guardian = item.dsfGuardian
    var guardianAddress = {
      secret: item.gotRestrictedAddress,
      id: guardian.FODT.toString() + guardian.PERS.toString(),
      firstName: guardian['NAVN-F'],
      middleName: guardian['NAVN-M'],
      lastName: guardian['NAVN-S'],
      streetAddress: guardian.ADR,
      zip: guardian.POSTN,
      city: guardian.POSTS
    }
    item.archive.guardian = guardianAddress
  }

  if (item.sendCopyToGuardian && !item.dsfGuardian) {
    item.noGuardianFound = true
  }

  console.log(item._id + ': setup-archive')

  return callback(null, JSON.stringify(item))
})

module.exports = setupArchive
