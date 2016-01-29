var request = require('request');

var UKPD = function() {

  const baseURL = 'https://data.police.uk/api';

  function makeRequest (path) {
    return new Promise(function(resolve, reject) {
      request(`${baseURL}${path}`, function(error, response, body) {
        if (error) { return reject(error); }
        if (response.statusCode !== 200) { return reject({message: 'Non-200 status code received: ${response.statusCode}'}); }
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

  return {
    streetLevel: makeRequest('/crimes-street/all-crime?lat=52.629729&lng=-1.131592')
  };

};

module.exports = new UKPD();
