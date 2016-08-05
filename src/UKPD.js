module.exports = () => {
  return {
    streetLevel: require('./methods/streetLevel'),
    stopAndSearch: require('./methods/stopAndSearch'),
    availability: require('./methods/availability')
  }
}
