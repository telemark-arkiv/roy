'use strict'

var miss = require('mississippi')
var svarUt = require('svarut')

var sendDocumentsToSvarUt = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  if (!item.gotRestrictedAddress) {
    console.log(item._id + ': send documents to svarut')
    svarUt(item.svarUt.options, function (error, id) {
      if (error) {
        item.errors.push(JSON.stringify(error))
      } else {
        item.svarUt.response = id
      }
    })
  } else {
    console.log(item._id + ': send documents to svarut. restrictedAddress')
  }

  return callback(null, JSON.stringify(item))
})

module.exports = sendDocumentsToSvarUt
