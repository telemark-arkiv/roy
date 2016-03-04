'use strict'

var miss = require('mississippi')
var svarUt = require('svarut')

var sendDocumentsToSvarUt = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  if (item.dsfError) {
    return callback(null, JSON.stringify(item))
  }

  if (!item.gotRestrictedAddress) {
    var options = JSON.parse(JSON.stringify(item.svarUt.options))
    console.log(item._id + ': send documents to svarut')
    svarUt(options, function (error, id) {
      if (error) {
        item.errors.push(JSON.stringify(error))
      } else {
        item.svarUt.response = id
        console.log(item._id + ': svarut id returned - ' + JSON.stringify(id))
      }
      return callback(null, JSON.stringify(item))
    })
  } else {
    console.log(item._id + ': send documents to svarut. restrictedAddress')
    return callback(null, JSON.stringify(item))
  }
})

module.exports = sendDocumentsToSvarUt
