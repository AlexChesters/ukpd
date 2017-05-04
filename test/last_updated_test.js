/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect

const UKPD = require('../src/UKPD')

describe('Last updated', function () {
  this.timeout(5000)
  it('should return the date in ISO 8601 format', function () {
    return UKPD().lastUpdated()
      .then((data) => {
        expect(data).to.be.an('object')
        expect(data.date).to.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)
      })
  })
})
