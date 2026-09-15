const MAX_RETRIES = 3

interface RateLimitResponse {
  error: string
  retry_after: number
}

const isRateLimitResponse = (data: unknown): data is RateLimitResponse => {
  if (!data || typeof data !== 'object') return false

  const response = data as Partial<RateLimitResponse>

  return response.error === 'too_many_requests' &&
    typeof response.retry_after === 'number' &&
    Number.isFinite(response.retry_after) &&
    response.retry_after >= 0
}

const wait = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const request = async (endpoint: string, retriesRemaining: number): Promise<any> => {
  const response = await fetch(`https://data.police.uk/api${endpoint}`)
  const data = await response.json()

  if (retriesRemaining > 0 && isRateLimitResponse(data)) {
    await wait(data.retry_after * 1000)
    return request(endpoint, retriesRemaining - 1)
  }

  return data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (endpoint: string): Promise<any> => request(endpoint, MAX_RETRIES)
