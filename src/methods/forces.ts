import fetchData from '../common/fetch-data'
import PATHS from '../common/paths'

/**
 * Make a request for either the list of forces or a specific force.
 * @param {string} force - Optional. A valid force identifier
 * @returns {promise}
 */
export default async (force?: string) => {
  return fetchData(`${PATHS.FORCES}${force ? `/${force}` : ''}`)
}
