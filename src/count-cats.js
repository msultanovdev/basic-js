const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let cats = 0;
  const unique = '^^';
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      if(array[i][j] === unique) {
        cats++;
      }
    }
  }
  return cats;
}

module.exports = {
  countCats
};
