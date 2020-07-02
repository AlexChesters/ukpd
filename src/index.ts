import availability from './methods/availability'
import categories from './methods/categories'
import forces from './methods/forces'
import lastUpdated from './methods/last-updated'
import stopAndSearch from './methods/stop-and-search'
import streetLevel from './methods/street-level'

/* eslint-disable camelcase */
interface Crime {
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

interface Availability {
  date: string,
  'stop-and-search': string[]
}

interface Category {
  url: string,
  name: string
}

export {
  availability,
  categories,
  forces,
  lastUpdated,
  stopAndSearch,
  streetLevel,
  // interfaces
  Crime,
  Availability,
  Category
}
