const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  object = {};

  domains.forEach((e) => {
    let rev = e.split(".").reverse();
    let string = '';

    rev.forEach((e) => {
      string += `.${e}`
      object[string] ? object[string] += 1 : object[string] = 1;
    });
  });
  
  return object;
}

module.exports = {
  getDNSStats
};
