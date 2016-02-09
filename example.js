'use strict'

var roy = require('./index')

roy({}, function (error, message) {
  if (error) {
    console.error(error)
  } else {
    console.log(JSON.stringify(message))
  }
})
