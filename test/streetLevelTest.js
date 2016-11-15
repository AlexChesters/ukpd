/* eslint-env mocha */

const chai = require('chai')
const expect = chai.expect

const UKPD = require('../src/UKPD')

describe('Street level', function () {
  this.timeout(5000)
  it('should fail', function () {
    return UKPD().streetLevel('52.629729', '-1.131592')
      .then((data) => expect(data).to.equal(true))
  })
})
