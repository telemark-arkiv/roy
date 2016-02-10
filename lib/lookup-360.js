'use strict'

var miss = require('mississippi')
var p360 = require('p360')
var config = require('../config')
var p360Options = {
  user: config.P360WS_USER,
  password: config.P360WS_PASSWORD,
  baseUrl: config.P360WS_BASEURL,
  options: {
    ignoredNamespaces: true
  }
}

var lookup360 = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var clientService = 'ContactService'
  var clientMethod = 'GetPrivatePersons'
  var args = {
    'parameter': {
      'PersonalIdNumber': item.studentId
    }
  }
  var options = {
    'p360': p360Options,
    'clientService': clientService,
    'clientMethod': clientMethod,
    'args': args
  }

  console.log(item._id + ': lookup-360')

  p360(options, function (error, data) {
    if (error) {
      item.errors.push(JSON.stringify(error))
    } else {
      item.p360Data = data
    }
  })

  return callback(null, JSON.stringify(item))
})

module.exports = lookup360
