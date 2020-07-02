import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'

/**
 * Make a request for the date the underlying data was last updated
 * @returns {promise}
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (): Promise<any> => fetchData(Endpoint.LAST_UPDATED)
