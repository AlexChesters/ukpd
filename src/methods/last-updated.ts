import fetchData from '../common/fetch-data'
import PATHS from '../common/paths'

/**
 * Make a request for the date the underlying data was last updated
 * @returns {promise}
 */
export default async () => fetchData(PATHS.LAST_UPDATED)
