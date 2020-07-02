import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'

/**
 * Make a request for either the list of forces or a specific force.
 * @param {string} force - Optional. A valid force identifier
 * @returns {promise}
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (force?: string): Promise<any> => {
  return fetchData(`${Endpoint.FORCES}${force ? `/${force}` : ''}`)
}
