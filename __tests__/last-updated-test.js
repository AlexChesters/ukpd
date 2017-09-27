/* eslint-env jest */

const chai = require('chai')
const expect = chai.expect

const UKPD = require('../build')

describe('Last updated', function () {
  jest.DEFAULT_TIMEOUT_INTERVAL = 5000
  test('should return the date in ISO 8601 format', function () {
    return UKPD.lastUpdated()
      .then((data) => {
        expect(data).to.be.an('object')
        expect(data.date).to.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)
      })
  })
})
