/* eslint-env jest */

import * as chai from 'chai'
import * as R from 'ramda'

import * as UKPD from '../'

import { Category } from '../'

const expect = chai.expect

describe('Categories', function () {
  test('should return a list of categories', function () {
    return UKPD.categories()
      .then((data: Category[]) => {
        expect(data).to.be.an('array')
        expect(data.length).to.be.above(0)
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
