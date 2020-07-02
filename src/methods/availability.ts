import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Availability } from '../'

export default async (): Promise<Availability[]> => fetchData(Endpoint.AVAILABILITY)
