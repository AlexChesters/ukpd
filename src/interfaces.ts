/* eslint-disable camelcase */
export interface Crime {
  category: Category
  location: {
    latitude: string
    longitude: string
    street: {
      name: string
    }
  },
  location_type: string,
  context: string,
  outcome_status: string,
  persistent_id: string,
  id: number,
  location_subtype: string,
  month: string
}
// eslint-enable camelcase */

export interface Availability {
  date: string,
  'stop-and-search': string[]
}

export interface Category {
  url: string,
  name: string
}
