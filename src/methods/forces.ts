import fetchData from '../utils/fetch-data'
import { Endpoint } from '../utils/endpoints'
import { Force } from '../'

async function forces(): Promise<Force[]>
async function forces(force: string): Promise<Force>
async function forces(force?: string): Promise<Force[] | Force> {
  return fetchData(`${Endpoint.FORCES}${force ? `/${force}` : ''}`)
}

export default forces
