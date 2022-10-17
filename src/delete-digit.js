const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  let arr = [];
  for(let i = 0; i < n.length; i++) {
    if(i === 0) {
      arr.push(parseInt(n.slice(1, n.length)));
    } else if(i === n.length - 1) {
      arr.push(parseInt(n.slice(0, n.length - 1)));
    } else {
      arr.push(parseInt(n.slice(0, i) + n.slice(i + 1, n.length)));
    }
  }
  return Math.max.apply(null, arr);
}

module.exports = {
  deleteDigit
};
