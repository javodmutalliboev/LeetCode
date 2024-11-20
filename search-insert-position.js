/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index = -1;
  let notFound = false;
  for (let i = 0; i < nums.length; i++) {
    if (notFound) {
      if (target < nums[i]) {
        index = i;
        break;
      }
    }
    if (!notFound && nums[i] === target) {
      index = i;
      break;
    }
    if (!notFound && i === nums.length - 1) {
      notFound = true;
      i = -1;
    }
  }
  if (index == -1) {
    index = nums.length;
  }
  return index;
};

const testCases = [
  {
    nums: [1, 3, 5, 6],
    target: 5,
  },
  {
    nums: [1, 3, 5, 6],
    target: 2,
  },
  {
    nums: [1, 3, 5, 6],
    target: 7,
  },
];

for (const testCase of testCases) {
  console.log(searchInsert(testCase.nums, testCase.target));
}
