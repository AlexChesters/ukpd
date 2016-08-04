/* eslint-env jasmine */

const nock = require('nock')

const UKPD = require('../../src/UKPD')
const successData = require('../../stub-data/availability/success')

describe('availability', function () {
  describe('when valid data is returned', function () {
    it('should resolve with that data', function (done) {
      // Intercept request and return the stub data
      nock('https://data.police.uk')
        .get('/api/crimes-street-dates')
        .reply(200, successData)
      UKPD
        .availability()
        .then((data) => { expect(data).toEqual(successData); done() })
        .catch(() => done.fail(new Error('Promise should not be rejected')))
    })
  })
})
