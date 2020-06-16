import fetchData from '../utils/fetch-data'
import PATHS from '../utils/paths'

/**
 * Make a request for the date the underlying data was last updated
 * @returns {promise}
 */
export default async () => fetchData(PATHS.LAST_UPDATED)
