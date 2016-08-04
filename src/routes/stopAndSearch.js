var makeRequest = require('../common/makeRequest')
var PATHS = require('../common/paths')

/**
 * Make a request for stop and searches based on a force.
 * @param {string} force - An valid force ID.
 * @param {string} date - A date in the format YYYY-MM.
 * @returns {promise}
 */
module.exports = function (force, date) {
  return makeRequest(`${PATHS.STOP_AND_SEARCH}?force=${force}&date=${date}`)
}
