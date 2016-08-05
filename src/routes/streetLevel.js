const makeRequest = require('../common/makeRequest')
const PATHS = require('../common/paths')

/**
 * Make a request for street level crimes based on a location.
 * @param {number} latitude - A number representing a latitude value.
 * @param {number} longitude - A number representing a longitude value.
 * @returns {promise}
 */
module.exports = (latitude, longitude) => {
  return makeRequest(`${PATHS.STREET_LEVEL}?lat=${latitude}&lng=${longitude}`)
}
