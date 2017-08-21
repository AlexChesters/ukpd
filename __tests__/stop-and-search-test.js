/* eslint-env jest */

const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const UKPD = require('../src/UKPD')

describe('Stop and search', function () {
  jest.DEFAULT_TIMEOUT_INTERVAL = 5000
  test('should return the expected data structure', function () {
    return UKPD.stopAndSearch('52.629729', '-1.131592')
      .then((data) => {
        expect(data).to.be.an('array')
        expect(data.length).to.be.above(0)
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
