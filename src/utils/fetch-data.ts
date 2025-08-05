// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (endpoint: string): Promise<any> => {
  const response = await fetch(`https://data.police.uk/api${endpoint}`)
  return response.json()
}
