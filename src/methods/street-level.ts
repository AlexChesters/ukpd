import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Crime } from '../'

export default async (latitude: number, longitude: number, date?: string): Promise<Crime[]> => {
  return fetchData(
    `${Endpoint.STREET_LEVEL}?lat=${latitude}&lng=${longitude}&date=${date}`
  )
}
