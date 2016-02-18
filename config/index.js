'use strict'

var config = {
  ARCHIVE_DIRECTORY_PATH: process.env.ARCHIVE_DIRECTORY_PATH || 'test/data/archive',
  DONE_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/data/done',
  ERROR_DIRECTORY_PATH: process.env.ERROR_DIRECTORY_PATH || 'test/data/errors',
  JOB_DIRECTORY_PATH: process.env.JOB_DIRECTORY_PATH || 'test/data/jobs',
  JWT_KEY: process.env.JWT_KEY || 'Louie Louie, oh no, I got to go',
  DSF_URL: process.env.DSF_URL || 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
  DSF_NAMESPACE: process.env.DSF_NAMESPACE || 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
  DSF_USERNAME: process.env.DSF_USERNAME || 'MrSmith',
  DSF_PASSWORD: process.env.DSF_PASSWORD || 'MrSmithsPassword',
  SVARUT_URL: process.env.SVARUT_URL || 'test.svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV4',
  SVARUT_USERNAME: process.env.SVARUT_USERNAME || 'MrSmith',
  SVARUT_PASSWORD: process.env.SVARUT_PASSWORD || 'MrSmithsPassword',
  SVARUT_KONTERINGSKODE: process.env.SVARUT_KONTERINGSKODE || '1111',
  P360WS_BASEURL: process.env.P360WS_BASEURL || 'http://tfk-fh-siweb01.login.top.no:8088/SI.WS.Core/SIF/',
  P360WS_USER: process.env.P360WS_USER || 'domain/username',
  P360WS_PASSWORD: process.env.P360WS_PASSWORD || 'password'
}

module.exports = config
