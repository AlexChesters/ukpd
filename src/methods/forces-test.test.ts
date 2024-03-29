/* eslint-env jest */

import * as chai from 'chai'
import * as R from 'ramda'

import * as UKPD from '../'

import { Force } from '../'

const expect = chai.expect

describe('Forces', function () {
  describe('for the list of forces', function () {
    test('should return the expected data structure', function () {
      return UKPD.forces()
        .then((data: Force[]) => {
          expect(data).to.be.an('array')
          expect(data.length).to.be.above(0)
          R.forEach((item) => expect(item).to.be.an('object'), data)
        })
    })
  })
  describe('for a specific force', function () {
    test('should return the expected data structure', function () {
      return UKPD.forces('cheshire')
        .then((data: Force) => {
          expect(data).to.be.an('object')
        })
    })
  })
})
