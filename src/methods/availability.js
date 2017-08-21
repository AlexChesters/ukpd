const fetchData = require('../common/fetch-data')
const PATHS = require('../common/paths')

/**
 * Make a request for the available data
 * @returns {promise}
 */
module.exports = async () => fetchData(PATHS.AVAILABILITY)
