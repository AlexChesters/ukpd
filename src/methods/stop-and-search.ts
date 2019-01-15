import fetchData from '../common/fetch-data'
import PATHS from '../common/paths'

/**
 * Make a request for stop and searches based on a location.
 * @param {number} latitude - A number representing a latitude value.
 * @param {number} longitude - A number representing a longitude value.
 * @param {string} date - Optional. A date in the format YYYY-MM
 * @returns {promise}
 */
export default async (latitude: number, longitude: number, date: string) => {
  return fetchData(
    `${PATHS.STOP_AND_SEARCH}?lat=${latitude}&lng=${longitude}&date=${date}`
  )
}
