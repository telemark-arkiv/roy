'use strict'

const fs = require('fs')
const miss = require('mississippi')
const config = require('../config')
const path = require('path')

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var fileName = config.ERROR_DIRECTORY_PATH + '/' + item._id + '.json'

  if (item.errors.length > 0) {
    console.log(item._id + ': save-job-error')
    console.log(item._id + ': save-job-error: Writes ' + item._id + '.json')
    fs.writeFileSync(fileName, JSON.stringify(item, null, 2))

    var documents = item.documents || []
    documents.push(item.restrictedAddressNotification)
    documents.push(item.noGuardianFoundNotification)
    documents.forEach(function (document) {
      console.log(item._id + ': save-job-error. Moves ' + document.document)
      var errorFile = config.ERROR_DIRECTORY_PATH + '/' + path.basename(document.document)
      fs.renameSync(document.document, errorFile)
    })
  }

  return callback(null, JSON.stringify(item))
})
