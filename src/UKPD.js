module.exports = () => {
  return {
    streetLevel: require('./methods/street_level'),
    stopAndSearch: require('./methods/stop_and_search'),
    forces: require('./methods/forces')
  }
}
