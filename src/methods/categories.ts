import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Category } from '../'

export default async (): Promise<Category[]> => fetchData(Endpoint.CATEGORIES)
