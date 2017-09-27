'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fetchData = require('../common/fetch-data');
const PATHS = require('../common/paths');

/**
 * Make a request for street level crimes based on a location.
 * @param {number} latitude - A number representing a latitude value.
 * @param {number} longitude - A number representing a longitude value.
 * @param {string} date - Optional. A date in the format YYYY-MM
 * @returns {promise}
 */
module.exports = (() => {
  var _ref = _asyncToGenerator(function* (latitude, longitude, date) {
    return fetchData(`${PATHS.STREET_LEVEL}?lat=${latitude}&lng=${longitude}&date=${date}`);
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})();