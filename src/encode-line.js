const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let string = '';
  let cnt = 1;
  let i = 0;
  while(str !== '') {
    if(str[i] === str[i + 1]) {
      cnt++;
      i++;
    } else {
      if(cnt === 1) cnt = '';
      string += cnt + str[i];
      str = str.slice(i + 1, str.length);
      i = 0;
      cnt = 1;
    }
  }
  return string;
}

module.exports = {
  encodeLine
};
