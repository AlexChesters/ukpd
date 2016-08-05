const makeRequest = require('../common/makeRequest')
const PATHS = require('../common/paths')

/**
 * Make a request for street level crimes based on a location.
 * @param {object} location - An object containing latitude and longitude values.
 * @returns {promise}
 */
module.exports = (location) => {
  const lat = location.latitude
  const lng = location.longitude
  return makeRequest(`${PATHS.STREET_LEVEL}?lat=${lat}&lng=${lng}`)
}
