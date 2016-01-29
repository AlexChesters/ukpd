var UKPD = function() {

  return {
    streetLevel: require('./routes/streetLevel'),
    stopAndSearch: require('./routes/stopAndSearch')
  };

};

module.exports = new UKPD();
