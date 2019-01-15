/* eslint-env jest */

import * as chai from 'chai'
import * as R from 'ramda'

import UKPD from '..'

const expect = chai.expect

describe('Availability', function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000
  test('should return the availability data', function () {
    return UKPD.availability()
      .then((data) => {
        expect(data).to.be.an('array')
        expect(data.length).to.be.above(0)
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
