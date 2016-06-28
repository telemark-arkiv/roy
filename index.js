'use strict'

module.exports = function roy (item, callback) {
  const miss = require('mississippi')
  const getNextJob = require('./lib/get-next-job')
  const filterParentsInformation = require('./lib/filter-parents-information')
  const encodeDocumentsToArchive = require('./lib/encode-documents-to-archive')
  const lookupDsf = require('./lib/lookup-dsf')
  const lookup360 = require('./lib/lookup-360')
  const lookupGuardianInformation = require('./lib/lookup-guardian-information')
  const lookupRestrictedAddress = require('./lib/lookup-restricted-address')
  const saveJobArchive = require('./lib/save-job-archive')
  const saveJobDone = require('./lib/save-job-done')
  const saveJobError = require('./lib/save-job-error')
  const cleanupJob = require('./lib/cleanup-job')
  const cleanupDocuments = require('./lib/cleanup-documents')
  const sendStatusMessage = require('./lib/send-status-message')
  const sendDocumentsToSvarUt = require('./lib/send-documents-to-svarut')
  const setupItem = require('./lib/setup-item')
  const setupSvarut = require('./lib/setup-svarut')
  const setupArchive = require('./lib/setup-archive')
  const unwrapContactInformation = require('./lib/unwrap-contact-information')
  const unwrapParentsInformation = require('./lib/unwrap-parents-information')
  const start = fromString(JSON.stringify(item))

  function fromString (string) {
    return miss.from(function (size, next) {
      // if there's no more content
      // left in the string, close the stream.
      if (string.length <= 0) return next(null, null)

      // Pull in a new chunk of text,
      // removing it from the string.
      var chunk = string.slice(0, size)
      string = string.slice(size)

      // Emit "chunk" from the stream.
      next(null, chunk)
    })
  }

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
    unwrapContactInformation,
    unwrapParentsInformation,
    filterParentsInformation,
    lookupGuardianInformation,
    lookupRestrictedAddress,
    setupSvarut,
    sendDocumentsToSvarUt,
    setupArchive,
    encodeDocumentsToArchive,
    saveJobArchive,
    saveJobDone,
    saveJobError,
    cleanupJob,
    cleanupDocuments,
    sendStatusMessage,
    finished
  )
}
