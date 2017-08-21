const fetchData = require('../common/fetch-data')
const PATHS = require('../common/paths')

/**
 * Make a request for the date the underlying data was last updated
 * @returns {promise}
 */
module.exports = async () => fetchData(PATHS.LAST_UPDATED)