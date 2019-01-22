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
