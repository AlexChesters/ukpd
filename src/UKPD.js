var request = require('request');

var UKPD = function() {

  return {
    streetLevel: require('./routes/streetLevel')
  };

};

module.exports = new UKPD();
