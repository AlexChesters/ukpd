/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const UKPD = require('../src/UKPD')

describe('Categories', function () {
  this.timeout(5000)
  it('should return a list of categories', function () {
    return UKPD.categories()
      .then((data) => {
        expect(data).to.be.an('array')
        expect(data.length).to.be.above(0)
        R.forEach((item) => expect(item).to.be.an('object'), data)
      })
  })
})
