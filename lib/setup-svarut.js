'use strict'

var miss = require('mississippi')
var config = require('../config')

var setupSvarUt = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var svarUt = {}
  var options = {
    config: {
      url: 'https://' + config.SVARUT_USERNAME + ':' + config.SVARUT_PASSWORD + '@' + config.SVARUT_URL,
      action: 'http://www.ks.no/svarut/services/ForsendelsesServiceV4/sendForsendelse'
    },
    tittel: 'SvarUt testdokument',
    dokumenter: [],
    forsendelse: {
      avgivendeSystem: 'node-svarut test',
      konteringskode: '1111',
      krevNiva4Innlogging: false,
      kryptert: false,
      kunDigitalLevering: false
    },
    mottaker: {
      type: 'privatPerson',
      navn: 'Terje Tverrtryne',
      adresse1: 'Skogsveien 42',
      adresse2: '',
      adresse3: '',
      postnr: '3710',
      poststed: 'Skien',
      fodselsnr: item.recipientPersonalIdNumber
    },
    printkonfigurasjon: {
      brevtype: 'BPOST',
      fargePrint: true,
      tosidig: false
    }
  }

  item.documents.forEach(function (documentPath) {
    options.dokumenter.push({
      filsti: documentPath,
      mimetype: 'application/pdf'
    })
  })

  svarUt.options = options

  item.svarUt = svarUt

  console.log(item._id + ': setup-svarut')

  return callback(null, JSON.stringify(item))
})

module.exports = setupSvarUt
