'use strict'

function roy (item, callback) {
  var miss = require('mississippi')
  var streamifier = require('streamifier')
  var start = streamifier.createReadStream(JSON.stringify(item))
  var setupItem = require('./lib/setup-item')
  var generateDocuments = require('./lib/generate-documents')
  var end = require('./lib/end')

  function finished (error) {
    if (error) {
      callback(error, null)
    } else {
      callback(null, item)
    }
  }

  miss.pipe(
    start,
    setupItem,
    generateDocuments,
    end,
    finished
  )
}

module.exports = roy
