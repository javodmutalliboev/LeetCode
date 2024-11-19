/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let unique = [];
  let k = 0;
  let lastDuplicate = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == lastDuplicate) {
      continue;
    }
    if (!unique.includes(nums[i])) {
      lastDuplicate = nums[i];
      unique.push(nums[i]);
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
