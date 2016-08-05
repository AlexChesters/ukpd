/* eslint-env jasmine */

const nock = require('nock')

const UKPD = require('../../src/UKPD')

describe('availability', function () {
  describe('when valid data is returned', function () {
    it('should resolve with that data', function (done) {
      // Intercept request and return the stub data
      nock('https://data.police.uk')
        .get('/api/crimes-street-dates')
        .reply(200, [{data: 'some-date'}])
      UKPD()
        .availability()
        .then((data) => { expect(data).toEqual([{data: 'some-date'}]); done() })
        .catch(() => done.fail(new Error('Promise should not be rejected')))
    })
  })
  describe('when invalid data is returned', function () {
    it('should reject with an error', function (done) {
      // Intercept request and return the stub data
      nock('https://data.police.uk')
        .get('/api/crimes-street-dates')
        .reply(200, '<h1>Welcome to my site</h1>')
      UKPD()
        .availability()
        .then(() => done.fail(new Error('Promise should not be rejected')))
        .catch((error) => { expect(error).toEqual('Invalid JSON'); done() })
    })
  })
})
