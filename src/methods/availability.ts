import fetchData from '../common/fetch-data'
import PATHS from '../common/paths'
import { IAvailability } from '../interfaces'

/**
 * Make a request for the available data
 * @returns {promise}
 */
export default async (): Promise<IAvailability[]> => fetchData(PATHS.AVAILABILITY)
