import availability from './methods/availability'
import categories from './methods/categories'
import forces from './methods/forces'
import lastUpdated from './methods/last-updated'
import stopAndSearch from './methods/stop-and-search'
import streetLevel from './methods/street-level'

import { ICrime, IAvailability, ICategory } from './interfaces'

const schemaPath = './schema.json'

export {
  availability,
  categories,
  forces,
  lastUpdated,
  stopAndSearch,
  streetLevel,
  // Types
  ICrime,
  IAvailability,
  ICategory,
  // Schema,
  schemaPath
}
