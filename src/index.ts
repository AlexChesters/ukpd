import availability from './methods/availability'
import categories from './methods/categories'
import forces from './methods/forces'
import lastUpdated from './methods/last-updated'
import stopAndSearch from './methods/stop-and-search'
import streetLevel from './methods/street-level'

type ForceIdentifier = string

interface Availability {
  date: string,
  'stop-and-search': ForceIdentifier[]
}

interface Category {
  url: string,
  name: string
}

interface Force {
  id: ForceIdentifier,
  name: string
}

interface LastUpdated {
  date: string
}

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

interface StopAndSearch {
  age_range: string,
  outcome: string,
  involved_person: boolean,
  self_defined_ethnicity: string,
  gender: string,
  legislation: string,
  outcome_linked_to_object_of_search: boolean,
  datetime: string,
  removal_of_more_than_outer_clothing: boolean,
  outcome_object: {
    id: string,
    name: string
  },
  location: {
    latitude: string,
    street: {
      id: number,
      name: string
    },
    longitude: string
  },
  operation: boolean,
  officer_defined_ethnicity: string,
  type: string,
  operation_name: string,
  object_of_search: string
}
// eslint-enable camelcase */

export {
  availability,
  categories,
  forces,
  lastUpdated,
  stopAndSearch,
  streetLevel,
  // interfaces
  Crime,
  StopAndSearch,
  Availability,
  Category,
  Force,
  LastUpdated
}
