'use strict'

var fs = require('fs')
var miss = require('mississippi')
var config = require('../config')

function filterJobsList (jobs) {
  var list = []

  jobs.forEach(function (job) {
    if (job.indexOf('.json') > -1) {
      list.push(job)
    }
  })

  return list
}

var getNextJob = miss.through(function (chunck, encoding, callback) {
  var jobs = filterJobsList(fs.readdirSync(config.JOB_DIRECTORY_PATH))
  var item

  if (jobs.length > 0) {
    console.log('get-next-job')
    item = fs.readFileSync(config.JOB_DIRECTORY_PATH + '/' + jobs[0])
    return callback(null, item.toString())
  } else {
    console.log('No jobs in queue')
    process.exit(0)
  }
})

module.exports = getNextJob
