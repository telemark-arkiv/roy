'use strict'

var fs = require('fs')
var miss = require('mississippi')

var cleanupDocuments = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var documents = item.documents || []

  if (item.errors.length === 0 && documents.length > 0) {
    console.log(item._id + ': cleanup-documents')
    documents.forEach(function (documentPath) {
      console.log(item._id + ': cleanup-documents. Removes ' + documentPath)
      fs.unlinkSync(documentPath)
    })
  }

  console.log(item._id + ': cleanup-documents. Removes ' + item.restrictedAddressNotification.document)
  fs.unlinkSync(item.restrictedAddressNotification.document)

  console.log(item._id + ': cleanup-documents. Removes ' + item.parentsDifferentAddressNotification.document)
  fs.unlinkSync(item.parentsDifferentAddressNotification.document)

  return callback(null, JSON.stringify(item))
})

module.exports = cleanupDocuments
