import * as fetch from 'isomorphic-fetch'

export default async (endpoint: string): Promise<Record<string, unknown> | Record<string, unknown>[]> => {
  const response = await fetch(`https://data.police.uk/api${endpoint}`)
  return response.json()
}
