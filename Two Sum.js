/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const number = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === target) {
        number.push(i);
        number.push(j);
        return number;
      }
    }
  }
  return number;
};

console.log(twoSum([2, 7, 11, 15], 9));
