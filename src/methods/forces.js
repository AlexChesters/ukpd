const fetchData = require('../common/fetch-data')
const PATHS = require('../common/paths')

/**
 * Make a request for either the list of forces or a specific force.
 * @param {string} force - Optional. A valid force identifier
 * @returns {promise}
 */
module.exports = async (force = null) => {
  return fetchData(`${PATHS.FORCES}${force ? `/${force}` : ''}`)
}
