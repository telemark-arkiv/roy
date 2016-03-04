'use strict'

var miss = require('mississippi')
var dsf = require('node-dsf')
var config = require('../config')
var dsfConfig = {
  url: config.DSF_URL,
  namespaceBrukersesjon: config.DSF_NAMESPACE,
  distribusjonskanal: 'PTP',
  systemnavn: 'systemnavn',
  brukernavn: config.DSF_USERNAME,
  passord: config.DSF_PASSWORD
}
var method = 'hentForeldre'

var lookupDsf = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  var fnr = item.recipientPersonalIdNumber

  var query = {
    saksref: 'MinElev',
    foedselsnr: fnr
  }
  var options = {
    method: method,
    config: dsfConfig,
    query: query
  }

  if (!item.dsfData) {
    console.log(item._id + ': lookup-dsf')

    dsf(options, function (error, data) {
      if (error) {
        console.log(item._id + ': lookup-dsf error - ' + JSON.stringify(error))
        item.errors.push(JSON.stringify(error))
        item.dsfError = error
      } else {
        item.dsfData = data
        item.dsfError = dsfGotErrors(data)
        if (item.dsfError) {
          item.errors.push(JSON.stringify(item.dsfError))
          item.CALLBACK_STATUS_MESSAGE = 'Sendt til manuell distribusjon'
        }
      }
      return callback(null, JSON.stringify(item))
    })
  } else {
    console.log(item._id + ': lookup-dsf. Data exists.')
    return callback(null, JSON.stringify(item))
  }
})

function dsfGotErrors (data) {
  if (data.RESULT) {
    return false
  } else {
    if (data.MESSAGE && data.MESSAGE.SUMMARY) {
      console.log(data.MESSAGE.SUMMARY)
    }
    return data
  }
}

module.exports = lookupDsf
