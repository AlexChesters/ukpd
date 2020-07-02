import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Availability } from '../'

/**
 * Make a request for the available data
 * @returns {promise}
 */
export default async (): Promise<Availability[]> => fetchData(Endpoint.AVAILABILITY)
