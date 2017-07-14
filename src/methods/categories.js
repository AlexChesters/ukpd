const fetchData = require('../common/fetch_data')
const PATHS = require('../common/paths')

/**
 * Make a request for the available categories
 * @returns {promise}
 */
module.exports = async () => fetchData(PATHS.CATEGORIES)
