const RI = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  s.split("").forEach((char, i) => {
    if (i === 0) {
      sum += RI[char];
    } else if (RI[char] > RI[s[i - 1]]) {
      sum += RI[char] - RI[s[i - 1]] * 2;
    } else {
      sum += RI[char];
    }
  });
  return sum;
};

console.log(romanToInt("MCMXCIV"));
