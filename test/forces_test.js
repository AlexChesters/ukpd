/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const UKPD = require('../src/UKPD')

describe('Forces', function () {
  this.timeout(5000)
  describe('for the list of forces', function () {
    it('should return the expected data structure', function () {
      return UKPD.forces()
        .then((data) => {
          expect(data).to.be.an('array')
          expect(data.length).to.be.above(0)
          R.forEach((item) => expect(item).to.be.an('object'), data)
        })
    })
  })
  describe('for a specific force', function () {
    it('should return the expected data structure', function () {
      return UKPD.forces('cheshire')
        .then((data) => {
          expect(data).to.be.an('object')
        })
    })
  })
})
