import fetchData from '../common/fetch-data'
import PATHS from '../common/paths'
import { ICategory } from '../interfaces'

/**
 * Make a request for the available categories
 * @returns {promise}
 */
export default async (): Promise<ICategory[]> => fetchData(PATHS.CATEGORIES)
