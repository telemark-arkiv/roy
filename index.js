'use strict'

function roy (item, callback) {
  var miss = require('mississippi')
  var streamifier = require('streamifier')
  var getNextJob = require('./lib/get-next-job')
  var lookupDsf = require('./lib/lookup-dsf')
  var saveJobDone = require('./lib/save-job-done')
  var saveJobError = require('./lib/save-job-error')
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
    lookupDsf,
    saveJobDone,
    saveJobError,
    cleanupJob,
    sendStatusMessage,
    finished
  )
}

module.exports = roy
