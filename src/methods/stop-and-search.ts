import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Force, StopAndSearch } from '../'

export default async (force: Force['id'], date?: string): Promise<StopAndSearch[]> => {
  return fetchData(
    `${Endpoint.STOP_AND_SEARCH}?force=${force}&date=${date}`
  )
}
