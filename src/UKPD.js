var UKPD = function () {
  return {
    streetLevel: require('./routes/streetLevel'),
    stopAndSearch: require('./routes/stopAndSearch'),
    availability: require('./routes/availability')
  }
}

module.exports = new UKPD()
