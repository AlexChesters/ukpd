/* eslint-env jest */

import * as chai from 'chai'
import * as R from 'ramda'

import * as UKPD from '../'

import { Availability } from '../'

const expect = chai.expect

describe('Availability', function () {
  test('should return the availability data', function () {
    return UKPD.availability()
      .then((data: Availability[]) => {
        expect(data).to.be.an('array')
        expect(data.length).to.be.above(0)
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
