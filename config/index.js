'use strict'

var config = {
  ARCHIVE_DIRECTORY_PATH: process.env.ARCHIVE_DIRECTORY_PATH || 'test/data/archive',
  DONE_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/data/done',
  ERROR_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/data/errors',
  JOB_DIRECTORY_PATH: process.env.JOB_DIRECTORY_PATH || 'test/data/jobs',
  JWT_KEY: process.env.JWT_KEY || 'Louie Louie, oh no, I got to go',
  DSF_URL: process.env.DSF_URL || 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
  DSF_NAMESPACE: process.env.DSF_NAMESPACE || 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
  DSF_USERNAME: process.env.DSF_USERNAME || 'MrSmith',
  DSF_PASSWORD: process.env.DSF_PASSWORD || 'MrSmithsPassword'
}

module.exports = config
