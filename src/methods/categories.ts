import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Category } from '../'

/**
 * Make a request for the available categories
 * @returns {promise}
 */
export default async (): Promise<Category[]> => fetchData(Endpoint.CATEGORIES)
