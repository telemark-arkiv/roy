'use strict'

function roy (item, callback) {
  var miss = require('mississippi')
  var streamifier = require('streamifier')
  var getNextJob = require('./lib/get-next-job')
  var lookupDsf = require('./lib/lookup-dsf')
  var lookup360 = require('./lib/lookup-360')
  var saveJobDone = require('./lib/save-job-done')
  var saveJobError = require('./lib/save-job-error')
  var cleanupJob = require('./lib/cleanup-job')
  var cleanupDocuments = require('./lib/cleanup-documents')
  var sendStatusMessage = require('./lib/send-status-message')
  var sendDocumentsToSvarUt = require('./lib/send-documents-to-svarut')
  var setupItem = require('./lib/setup-item')
  var setupSvarut = require('./lib/setup-svarut')
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
    lookup360,
    setupSvarut,
    sendDocumentsToSvarUt,
    saveJobDone,
    saveJobError,
    cleanupJob,
    cleanupDocuments,
    sendStatusMessage,
    finished
  )
}

module.exports = roy
