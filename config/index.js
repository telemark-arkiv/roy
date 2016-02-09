'use strict'

var config = {
  ARCHIVE_DIRECTORY_PATH: process.env.ARCHIVE_DIRECTORY_PATH || 'test/data/archive',
  DONE_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/data/done',
  ERROR_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/data/error',
  JOB_DIRECTORY_PATH: process.env.JOB_DIRECTORY_PATH || 'test/data/jobs',
  JWT_KEY: process.env.JWT_KEY || 'Louie Louie, oh no, I got to go'
}

module.exports = config
