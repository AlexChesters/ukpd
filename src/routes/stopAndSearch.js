var makeRequest = require('../common/makeRequest');
var PATHS = require('../common/paths');

/**
 * Make a request for stop and searches based on a force.
 * @param {string} force - An valid force ID.
 * @returns {promise}
 */
module.exports = function(force) {
  return makeRequest(`${PATHS.STOP_AND_SEARCH}?force=${force}`);
};
