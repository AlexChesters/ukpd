/* eslint-env jasmine */

const nock = require('nock')

const makeRequest = require('../../../src/common/makeRequest')

describe('makeRequest', function () {
  describe('when a sucessful request is made', function () {
    describe('and valid data is returned', function () {
      it('should resolve with that data', function (done) {
        // Intercept request and return the stub data
        nock('https://data.police.uk/api')
          .get('/foobar')
          .reply(200, [{data: 'some-date'}])
        makeRequest('/foobar')
          .then((data) => { expect(data).toEqual([{data: 'some-date'}]); done() })
          .catch(() => done.fail(new Error('Promise should not be rejected')))
      })
    })
    describe('and invalid data is returned', function () {
      it('should reject with an error', function (done) {
        // Intercept request and return the stub data
        nock('https://data.police.uk/api')
          .get('/foobar')
          .reply(200, '<h1>Welcome to my site</h1>')
        makeRequest('/foobar')
          .then(() => done.fail(new Error('Promise should not be rejected')))
          .catch((error) => { expect(error).toEqual('Invalid JSON'); done() })
      })
    })
  })
  describe('when an unsuccessful request is made', function () {
    describe('and a non-200 status code is received', function () {
      it('should reject with an error', function (done) {
        nock('https://data.police.uk/api')
          .get('/foobar')
          .reply(500)
        makeRequest('/foobar')
          .then(() => done.fail(new Error('Promise should not be rejected')))
          .catch((error) => { expect(error).toEqual('Non-200 status code received (500)'); done() })
      })
    })
  })
})
