const makeRequest = require('../common/makeRequest')
const PATHS = require('../common/paths')

/**
 * Make a request for the availability endpoint.
 * @returns {promise}
 */
module.exports = function () {
  return makeRequest(`${PATHS.AVAILABILITY}`)
}
