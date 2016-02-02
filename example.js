'use strict'

var roy = require('./index')
var input = require('./test/data/input.json')

roy(input, function (error, message) {
  if (error) {
    console.error(error)
  } else {
    console.log(JSON.stringify(message))
  }
})
