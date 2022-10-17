const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newArr = Array.from(Array(matrix.length), () => new Array(matrix[0].length));
  
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      let cnt = 0;
      for(let k = i - 1; k <= i + 1; k++) {
        for(let m = j - 1; m <= j + 1; m++) {
          if(k >= 0 && k < matrix.length && m >= 0 && m < matrix[0].length) {
            if(i !== k || j !== m) {
              if(matrix[k][m] === true) {
                cnt++;
              }
            }
          }
        }
      }
      newArr[i][j] = cnt;
    }
  }

  return newArr;
}

module.exports = {
  minesweeper
};
