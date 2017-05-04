const fetchData = require('../common/fetch_data')
const PATHS = require('../common/paths')

/**
 * Make a request for the date the underlying data was last updated
 * @returns {promise}
 */
module.exports = () => fetchData(PATHS.LAST_UPDATED)
