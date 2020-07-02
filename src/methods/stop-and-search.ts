import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'

/**
 * Make a request for stop and searches based on a location.
 * @param {number} latitude - A number representing a latitude value.
 * @param {number} longitude - A number representing a longitude value.
 * @param {string} date - Optional. A date in the format YYYY-MM
 * @returns {promise}
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (latitude: number, longitude: number, date?: string): Promise<any> => {
  return fetchData(
    `${Endpoint.STOP_AND_SEARCH}?lat=${latitude}&lng=${longitude}&date=${date}`
  )
}
