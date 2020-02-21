export interface ICrime {
  category: ICategory
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

export interface ICategory {
  url: string,
  name: string
}
