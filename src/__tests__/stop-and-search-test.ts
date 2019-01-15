/* eslint-env jest */

import * as chai from 'chai'
import * as R from 'ramda'

import UKPD from '../UKPD'

const expect = chai.expect

describe('Stop and search', function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000
  test('should return the expected data structure', function () {
    return UKPD.stopAndSearch(52.629729, -1.131592)
      .then((data: object[]) => {
        expect(data).to.be.an('array')
        expect(data.length).to.be.above(0)
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
