'use strict'

function roy (item, callback) {
  var fs = require('fs')
  var miss = require('mississippi')
  var streamifier = require('streamifier')
  var start = streamifier.createReadStream(JSON.stringify(item))
  var setupItem = require('./lib/setup-item')
  var generateDocuments = require('./lib/generate-documents')
  var end = require('./lib/end')
  var output = fs.createWriteStream('test/data/output.json')

  function finished (error) {
    if (error) {
      callback(error, null)
    } else {
      callback(null, {message: 'success'})
    }
  }

  miss.pipe(
    start,
    setupItem,
    generateDocuments,
    end,
    output,
    finished
  )
}

module.exports = roy
