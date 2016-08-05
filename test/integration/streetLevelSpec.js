/* eslint-env jasmine */

const nock = require('nock')

const UKPD = require('../../src/UKPD')

describe('street level', function () {
  describe('when valid data is returned', function () {
    it('should resolve with that data', function (done) {
      // Intercept request and return the stub data
      nock('https://data.police.uk')
        .get('/api/crimes-street/all-crime?lat=123&lng=456')
        .reply(200, [{data: 'some-data'}])
      UKPD()
        .streetLevel(123, 456)
        .then((data) => { expect(data).toEqual([{data: 'some-data'}]); done() })
        .catch(() => done.fail(new Error('Promise should not be rejected')))
    })
  })
  describe('when invalid data is returned', function () {
    it('should reject with an error', function (done) {
      // Intercept request and return the stub data
      nock('https://data.police.uk')
        .get('/api/crimes-street/all-crime?lat=123&lng=456')
        .reply(200, '<h1>Welcome to my site</h1>')
      UKPD()
        .streetLevel(123, 456)
        .then(() => done.fail(new Error('Promise should not be resolved')))
        .catch((error) => { expect(error).toEqual('Invalid JSON'); done() })
    })
  })
})
