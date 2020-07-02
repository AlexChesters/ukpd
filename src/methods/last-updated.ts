import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { LastUpdated } from '../'

/**
 * Make a request for the date the underlying data was last updated
 * @returns {promise}
 */

export default async (): Promise<LastUpdated> => fetchData(Endpoint.LAST_UPDATED)
