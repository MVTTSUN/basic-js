const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrS1 = s1.split('');
  let arrS2 = s2.split('');
  let cnt = 0;
  arrS1.forEach(e => {
    for(let i = 0; i < arrS2.length; i++) {
      if(e === arrS2[i]) {
        delete e;
        delete arrS2[i];
        cnt++;
        break;
      }
    }
  })
  return cnt;
}

module.exports = {
  getCommonCharacterCount
};
