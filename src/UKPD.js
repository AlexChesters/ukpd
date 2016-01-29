var request = require('request');

var UKPD = function() {

  const baseURL = 'https://data.police.uk/api';

  const PATHS = {
    STREET_LEVEL: '/crimes-street/all-crime'
  };

  function makeRequest (path) {
    return new Promise(function(resolve, reject) {
      request(`${baseURL}${path}`, function(error, response, body) {
        if (error) { return reject(error); }
        if (response.statusCode !== 200) { return reject({message: `Non-200 status code received: ${response.statusCode}`}); }
        var data;
        try {
          data = JSON.parse(body);
        } catch (e) {
          return reject(e);
        }
        return resolve(data);
      });
    });
  };

  /**
   * Make a request for street level crimes based on a location.
   * @param {object} location - An object containing latitude and longitude values.
   * @returns {promise}
   */
  function streetLevel (location) {
    return makeRequest(`${PATHS.STREET_LEVEL}?lat=${location.lat}&lng=${location.long}`);
  };

  return {
    streetLevel: streetLevel
  };

};

module.exports = new UKPD();
