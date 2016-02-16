'use strict'

var fs = require('fs')
var miss = require('mississippi')

var cleanupDocuments = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var documents = item.documents || []

  if (item.errors.length === 0 && documents.length > 0) {
    console.log(item._id + ': cleanup-documents')
    documents.forEach(function (document) {
      console.log(item._id + ': cleanup-documents. Removes ' + document.document)
      fs.unlinkSync(document.document)
    })

    console.log(item._id + ': cleanup-documents. Removes ' + item.restrictedAddressNotification.document)
    fs.unlinkSync(item.restrictedAddressNotification.document)

    console.log(item._id + ': cleanup-documents. Removes ' + item.noGuardianFoundNotification.document)
    fs.unlinkSync(item.noGuardianFoundNotification.document)
  }

  return callback(null, JSON.stringify(item))
})

module.exports = cleanupDocuments
