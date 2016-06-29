'use strict'

var config = {
  ARCHIVE_DIRECTORY_PATH: process.env.TFK_ROY_ARCHIVE_DIRECTORY_PATH || 'test/data/archive',
  DONE_DIRECTORY_PATH: process.env.TFK_ROY_DONE_DIRECTORY_PATH || 'test/data/done',
  ERROR_DIRECTORY_PATH: process.env.TFK_ROY_ERROR_DIRECTORY_PATH || 'test/data/errors',
  JOB_DIRECTORY_PATH: process.env.TFK_ROY_JOB_DIRECTORY_PATH || 'test/data/jobs',
  JWT_KEY: process.env.TFK_ROY_JWT_KEY || 'Louie Louie, oh no, I got to go',
  DSF_URL: process.env.TFK_ROY_DSF_URL || 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
  DSF_NAMESPACE: process.env.TFK_ROY_DSF_NAMESPACE || 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
  DSF_USERNAME: process.env.TFK_ROY_DSF_USERNAME || 'MrSmith',
  DSF_PASSWORD: process.env.TFK_ROY_DSF_PASSWORD || 'MrSmithsPassword',
  DSF_METHOD: process.env.TFK_ROY_DSF_METHOD || 'hentForeldre',
  DSF_SAKSREF: process.env.TFK_ROY_DSF_SAKSREF || 'MinElev',
  SVARUT_URL: process.env.TFK_ROY_SVARUT_URL || 'test.svarut.ks.no/tjenester/forsendelseservice/ForsendelsesServiceV4',
  SVARUT_USERNAME: process.env.TFK_ROY_SVARUT_USERNAME || 'MrSmith',
  SVARUT_PASSWORD: process.env.TFK_ROY_SVARUT_PASSWORD || 'MrSmithsPassword',
  SVARUT_KONTERINGSKODE: process.env.TFK_ROY_SVARUT_KONTERINGSKODE || '1111',
  SVARUT_AVGIVENDE_SYSTEM: process.env.SVARUT_AVGIVENDE_SYSTEM || 'MinElev',
  P360WS_BASEURL: process.env.TFK_ROY_P360WS_BASEURL || 'http://tfk-fh-siweb01.login.top.no:8088/SI.WS.Core/SIF/',
  P360WS_USER: process.env.TFK_ROY_P360WS_USER || 'domain/username',
  P360WS_PASSWORD: process.env.TFK_ROY_P360WS_PASSWORD || 'password'
}

module.exports = config
