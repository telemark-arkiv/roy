'use strict'

var fs = require('fs')
var miss = require('mississippi')
var config = require('../config')

var getNextJob = miss.through(function (chunck, encoding, callback) {
  var jobs = fs.readdirSync(config.JOB_DIRECTORY_PATH)
  var item

  if (jobs.length > 0) {
    console.log('get-next-job')
    item = fs.readFileSync(config.JOB_DIRECTORY_PATH + '/' + jobs[0])
    return callback(null, item.toString())
  } else {
    console.log('get-next-job. No new jobs.')
    return callback(new Error('No jobs in queue'), null)
  }
})

module.exports = getNextJob
