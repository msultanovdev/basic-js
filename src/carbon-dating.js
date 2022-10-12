const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  const halflife = 5730;
  const modernactiviti = 15;
  let ans;
  if((typeof(str) !== 'string') || (str <= 0) || (str > modernactiviti) || (isNaN(str)) || (str.length = 0)) {
    return false;
  } else {
    return ans = Math.ceil((Math.log(modernactiviti / str)) / ((0.693 / halflife)));
  }  
}

module.exports = {
  dateSample
};
