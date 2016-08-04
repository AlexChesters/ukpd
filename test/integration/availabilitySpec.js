/* eslint-env jasmine */

const nock = require('nock')

const UKPD = require('../../src/UKPD')
const successData = require('../../stub-data/availability/success')

describe('availability', function () {
  it('should return the stub data', function (done) {
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
