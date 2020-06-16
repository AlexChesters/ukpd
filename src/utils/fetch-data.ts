import * as fetch from 'isomorphic-fetch'

export default async (path: string) => {
  const response = await fetch(`https://data.police.uk/api${path}`)
  return response.json()
}
