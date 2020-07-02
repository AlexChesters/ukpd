import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Force } from '../'

/**
 * Make a request for either the list of forces or a specific force.
 * @param {string} force - Optional. A valid force identifier
 * @returns {promise}
 */
export default async (force?: string): Promise<Force[] | Force> => {
  return fetchData(`${Endpoint.FORCES}${force ? `/${force}` : ''}`)
}
