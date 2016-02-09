'use strict'

function roy (item, callback) {
  var miss = require('mississippi')
  var streamifier = require('streamifier')
  var getNextJob = require('./lib/get-next-job')
  var saveJobDone = require('./lib/save-job-done')
  var cleanupJob = require('./lib/cleanup-job')
  var sendStatusMessage = require('./lib/send-status-message')
  var setupItem = require('./lib/setup-item')
  var start = streamifier.createReadStream(JSON.stringify(item))

  function finished (error) {
    if (error) {
      callback(error, null)
    } else {
      callback(null, {message: 'success'})
    }
  }

  miss.pipe(
    start,
    getNextJob,
    setupItem,
    saveJobDone,
    cleanupJob,
    sendStatusMessage,
    finished
  )
}

module.exports = roy
