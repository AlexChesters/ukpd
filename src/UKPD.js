module.exports = () => {
  return {
    streetLevel: require('./routes/streetLevel'),
    stopAndSearch: require('./routes/stopAndSearch'),
    availability: require('./routes/availability')
  }
}
