/* eslint-env jest */

import * as chai from 'chai'
import * as R from 'ramda'

import * as UKPD from '../src'

import { Category } from '../src'

const expect = chai.expect

describe('Categories', function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000
  test('should return a list of categories', function () {
    return UKPD.categories()
      .then((data: Category[]) => {
        expect(data).to.be.an('array')
        expect(data.length).to.be.above(0)
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
