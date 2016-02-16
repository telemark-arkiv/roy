'use strict'

var miss = require('mississippi')
var config = require('../config')

var setupSvarUt = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var contact = item.dsfContact
  var svarUt = {}
  var options = {
    config: {
      url: 'https://' + config.SVARUT_USERNAME + ':' + config.SVARUT_PASSWORD + '@' + config.SVARUT_URL,
      action: 'http://www.ks.no/svarut/services/ForsendelsesServiceV4/sendForsendelse'
    },
    tittel: item.svarUtTitle,
    dokumenter: [],
    forsendelse: {
      avgivendeSystem: 'MinElev',
      konteringskode: '1111',
      krevNiva4Innlogging: false,
      kryptert: false,
      kunDigitalLevering: false
    },
    mottaker: [
      {
        type: 'privatPerson',
        navn: item.recipientName,
        adresse1: contact.ADR,
        adresse2: '',
        adresse3: '',
        postnr: contact.POSTN,
        poststed: contact.POSTS,
        fodselsnr: item.recipientPersonalIdNumber
      }
    ],
    printkonfigurasjon: {
      brevtype: 'BPOST',
      fargePrint: true,
      tosidig: false
    }
  }

  item.documents.forEach(function (document) {
    options.dokumenter.push({
      filsti: document.document,
      mimetype: 'application/pdf'
    })
  })

  if (item.sendCopyToGuardian && item.dsfGuardian) {
    console.log(item._id + ': setup-svarut. Adds guardian')
    var guardian = item.dsfGuardian
    var guardianAddress = {
      type: 'privatPerson',
      navn: guardian.NAVN,
      adresse1: guardian.ADR,
      adresse2: '',
      adresse3: '',
      postnr: guardian.POSTN,
      poststed: guardian.POSTS,
      fodselsnr: guardian.FODT.toString() + guardian.PERS.toString()
    }
    options.mottaker.push(guardianAddress)
  }

  svarUt.options = options

  item.svarUt = svarUt

  console.log(item._id + ': setup-svarut')

  return callback(null, JSON.stringify(item))
})

module.exports = setupSvarUt
