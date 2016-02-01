var makeRequest = require('../common/makeRequest');
var PATHS = require('../common/paths');

/**
 * Make a request for the availability endpoint.
 * @returns {promise}
 */
module.exports = function() {
  return makeRequest(`${PATHS.AVAILABILITY}`);
};
