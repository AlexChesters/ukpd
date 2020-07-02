import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Force } from '../'

export default async (force?: string): Promise<Force[] | Force> => {
  return fetchData(`${Endpoint.FORCES}${force ? `/${force}` : ''}`)
}
