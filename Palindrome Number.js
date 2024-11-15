/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  } else if (x % 10 === 0) {
    return false;
  }

  let power = -1;
  let xUse = x;
  while (xUse) {
    power++;
    xUse = (xUse / 10) | 0;
  }

  xUse = x;
  reverse = 0;
  while (xUse) {
    reverse += (xUse % 10) * Math.pow(10, power--);
    xUse = (xUse / 10) | 0;
  }

  if (x === reverse) {
    return true;
  }

  return false;
};

console.log(isPalindrome(121));
