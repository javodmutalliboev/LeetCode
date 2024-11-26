/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length === 0) {
    return digits;
  }
  let sum = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    sum = digits[i] + 1;
    if (0 | (sum / 10)) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    } else {
      digits[i] = sum;
      return digits;
    }
  }
};

const testCases = [[1, 2, 3], [4, 3, 2, 1], [9]];

for (const testCase of testCases) {
  console.log(plusOne(testCase));
}
