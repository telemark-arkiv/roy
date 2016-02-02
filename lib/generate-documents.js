'use strict'

var miss = require('mississippi')
var createPdfFromTemplate = require('tfk-template-to-pdf')
var uuid = require('uuid')
var config = require('../config')

var generateDocument = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var documents = item.distribution.documents || []
  var options = {
    templateData: '',
    templateFilepath: '',
    documentFilepath: '',
    templaterServiceUrl: config.TEMPLATER_SERVICE_URL,
    pdfServiceUrl: config.PDFCONVERTER_SERVICE_URL
  }
  var jobsToDo = documents.length
  var jobsDone = 0

  function areWeDoneYet () {
    jobsDone++
    if (jobsToDo === jobsDone) {
      return callback(null, JSON.stringify(item))
    }
  }

  console.log('generate-documents')

  item.distribution.documentIds = []

  if (documents) {
    documents.forEach(function (document) {
      var documentId = 'test/data/' + uuid.v4() + '.pdf'
      options.templateData = document.data
      options.templateFilepath = document.template
      options.documentFilepath = documentId

      createPdfFromTemplate(options, function (error, data) {
        if (error) {
          item.errors.push(error)
        } else {
          item.distribution.documentIds.push(documentId)
        }
        areWeDoneYet()
      })
    })
  } else {
    return callback(null, JSON.stringify(item))
  }
})

module.exports = generateDocument
