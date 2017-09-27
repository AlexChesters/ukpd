/* eslint-env jest */

const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const UKPD = require('../build')

describe('Availability', function () {
  jest.DEFAULT_TIMEOUT_INTERVAL = 5000
  test('should return the availability data', function () {
    return UKPD.availability()
      .then((data) => {
        expect(data).to.be.an('array')
        expect(data.length).to.be.above(0)
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
