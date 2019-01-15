import fetchData from '../common/fetch-data'
import PATHS from '../common/paths'

/**
 * Make a request for the available categories
 * @returns {promise}
 */
export default async () => fetchData(PATHS.CATEGORIES)
