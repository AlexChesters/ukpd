/* eslint-env jasmine */

const nock = require('nock')

const UKPD = require('../../src/UKPD')

describe('stop and search', function () {
  describe('when valid data is returned', function () {
    it('should resolve with that data', function (done) {
      // Intercept request and return the stub data
      nock('https://data.police.uk')
        .get('/api/stops-force?force=some-force&date=some-date')
        .reply(200, [{data: 'some-date'}])
      UKPD()
        .stopAndSearch('some-force', 'some-date')
        .then((data) => { expect(data).toEqual([{data: 'some-date'}]); done() })
        .catch(() => done.fail(new Error('Promise should not be rejected')))
    })
  })
  describe('when invalid data is returned', function () {
    it('should reject with an error', function (done) {
      // Intercept request and return the stub data
      nock('https://data.police.uk')
        .get('/api/stops-force?force=some-force&date=some-date')
        .reply(200, '<h1>Welcome to my site</h1>')
      UKPD()
        .stopAndSearch('some-force', 'some-date')
        .then(() => done.fail(new Error('Promise should not be rejected')))
        .catch((error) => { expect(error).toEqual('Invalid JSON'); done() })
    })
  })
})
