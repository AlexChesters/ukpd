/* eslint-env jest */

import * as chai from 'chai'
import * as R from 'ramda'

import * as UKPD from '..'

const expect = chai.expect

describe('Forces', function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000
  describe('for the list of forces', function () {
    test('should return the expected data structure', function () {
      return UKPD.forces()
        .then((data) => {
          expect(data).to.be.an('array')
          expect(data.length).to.be.above(0)
          R.forEach((item) => expect(item).to.be.an('object'), data)
        })
    })
  })
  describe('for a specific force', function () {
    test('should return the expected data structure', function () {
      return UKPD.forces('cheshire')
        .then((data) => {
          expect(data).to.be.an('object')
        })
    })
  })
})
