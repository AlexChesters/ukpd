import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { StopAndSearch } from '../'

export default async (latitude: number, longitude: number, date?: string): Promise<StopAndSearch[]> => {
  return fetchData(
    `${Endpoint.STOP_AND_SEARCH}?lat=${latitude}&lng=${longitude}&date=${date}`
  )
}
