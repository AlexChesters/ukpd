import fetchData from './fetch-data'

const response = (data: unknown): Response => new Response(JSON.stringify(data))

describe('fetch data', function () {
  const originalFetch = globalThis.fetch
  const originalSetTimeout = globalThis.setTimeout

  afterEach(function () {
    globalThis.fetch = originalFetch
    globalThis.setTimeout = originalSetTimeout
  })

  test('retries after waiting for a rate limit response', async function () {
    let requests = 0
    let retryDelay = 0

    globalThis.fetch = async () => {
      requests += 1

      return response(
        requests === 1
          ? { error: 'too_many_requests', retry_after: 30 }
          : [{ id: 1 }]
      )
    }
    globalThis.setTimeout = ((callback: () => void, milliseconds: number): number => {
      retryDelay = milliseconds
      callback()
      return 0
    }) as typeof setTimeout

    await expect(fetchData('/test')).resolves.toEqual([{ id: 1 }])
    expect(requests).toBe(2)
    expect(retryDelay).toBe(30_000)
  })
})
