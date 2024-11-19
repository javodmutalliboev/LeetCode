/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (val !== nums[i]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

nums = [3, 2, 2, 3];
val = 3;
console.log(removeElement(nums, val));
console.log(nums);
