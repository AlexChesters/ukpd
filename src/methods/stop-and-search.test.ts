/* eslint-env jest */

import * as chai from 'chai'
import * as R from 'ramda'

import * as UKPD from '../'

import { StopAndSearch } from '../'

const expect = chai.expect

describe('Stop and search', function () {
  test('should return the expected data structure', function () {
    return UKPD.stopAndSearch('cheshire')
      .then((data: StopAndSearch[]) => {
        expect(data).to.be.an('array')
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
