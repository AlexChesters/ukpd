const fetchData = require('../common/fetch_data')
const PATHS = require('../common/paths')

/**
 * Make a request for either the list of forces or a specific force.
 * @returns {promise}
 */
module.exports = async (force = '') => {
  return fetchData(`${PATHS.FORCES}${force ? `/${force}` : ''}`)
}
