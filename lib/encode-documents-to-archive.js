'use strict'

var fs = require('fs')
var miss = require('mississippi')

var encodeDocumentsToArchive = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  if (item.dsfError) {
    return callback(null, JSON.stringify(item))
  }

  var documentsToArchive = item.archive.documents

  console.log(item._id + ': encode-documents-to-archive')

  item.documents.forEach(function (doc) {
    var document = fs.readFileSync(doc.document)
    documentsToArchive.push({
      title: doc.title,
      data: document.toString('base64'),
      type: doc.type
    })
  })

  if (item.gotRestrictedAddress) {
    var restrictedAddressDocument = fs.readFileSync(item.restrictedAddressNotification.document)
    documentsToArchive.push({
      title: item.restrictedAddressNotification.title,
      data: restrictedAddressDocument.toString('base64'),
      type: item.restrictedAddressNotification.type
    })
  }

  if (item.noGuardianFound) {
    var noGuardianDocument = fs.readFileSync(item.noGuardianFoundNotification.document)
    documentsToArchive.push({
      title: item.noGuardianFoundNotification.title,
      data: noGuardianDocument.toString('base64'),
      type: item.noGuardianFoundNotification.type
    })
  }

  return callback(null, JSON.stringify(item))
})

module.exports = encodeDocumentsToArchive
