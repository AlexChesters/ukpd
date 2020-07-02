import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { LastUpdated } from '../'

export default async (): Promise<LastUpdated> => fetchData(Endpoint.LAST_UPDATED)
