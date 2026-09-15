import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Crime } from '../'

export default async (poly: string, date?: string): Promise<Crime[]> => {
  const dateParam = date ? `&date=${date}` : ''

  return fetchData(`${Endpoint.STREET_LEVEL}?poly=${poly}${dateParam}`)
}
