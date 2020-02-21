export interface ICrime {
  category: string
  location: {
    latitude: string
    longitude: string
    street: {
      name: string
    }
  }
}

export interface IAvailability {
  date: string,
  'stop-and-search': string[]
}
