import fetchData from '../utils/fetch-data'
import PATHS from '../utils/paths'
import { Category } from '../interfaces'

/**
 * Make a request for the available categories
 * @returns {promise}
 */
export default async (): Promise<Category[]> => fetchData(PATHS.CATEGORIES)
