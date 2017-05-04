const fetchData = require('../common/fetch_data')
const PATHS = require('../common/paths')

/**
 * Make a request for street level crimes based on a location.
 * @param {number} latitude - A number representing a latitude value.
 * @param {number} longitude - A number representing a longitude value.
 * @param {string} date - Optional. A date in the format YYYY-MM
 * @returns {promise}
 */
module.exports = async (latitude, longitude, date) => {
  return fetchData(
    `${PATHS.STREET_LEVEL}?lat=${latitude}&lng=${longitude}&date=${date}`
  )
}
