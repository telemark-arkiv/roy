'use strict'

var config = {
  TEMPLATER_SERVICE_URL: process.env.TEMPLATER_SERVICE_URL || 'https://templater.service.t-fk.no',
  PDFCONVERTER_SERVICE_URL: process.env.PDFCONVERTER_SERVICE_URL || 'https://pdfconvert.service.t-fk.no'
}

module.exports = config
