'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fetchData = require('../common/fetch-data');
const PATHS = require('../common/paths');

/**
 * Make a request for either the list of forces or a specific force.
 * @param {string} force - Optional. A valid force identifier
 * @returns {promise}
 */
module.exports = (() => {
  var _ref = _asyncToGenerator(function* (force = null) {
    return fetchData(`${PATHS.FORCES}${force ? `/${force}` : ''}`);
  });

  return function () {
    return _ref.apply(this, arguments);
  };
})();