import fetchData from '../utils/fetch-data'
import PATHS from '../utils/paths'
import { Availability } from '../interfaces'

/**
 * Make a request for the available data
 * @returns {promise}
 */
export default async (): Promise<Availability[]> => fetchData(PATHS.AVAILABILITY)
