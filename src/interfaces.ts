/* eslint-disable camelcase */
export interface ICrime {
  category: ICategory
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

export interface IAvailability {
  date: string,
  'stop-and-search': string[]
}

export interface ICategory {
  url: string,
  name: string
}
