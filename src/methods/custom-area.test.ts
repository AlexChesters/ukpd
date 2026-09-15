import * as chai from 'chai'
import * as R from 'ramda'

import * as UKPD from '../'

import { Crime } from '../'

const expect = chai.expect

describe('Custom area', function () {
  test('should return the expected data structure', function () {
    return UKPD.customArea(
      '52.629729,-1.131592:52.630729,-1.131592:52.630729,-1.130592:52.629729,-1.130592'
    )
      .then((data: Crime[]) => {
        expect(data).to.be.an('array')
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
