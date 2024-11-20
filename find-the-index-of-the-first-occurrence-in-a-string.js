/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let index = -1;
  index = haystack.indexOf(needle);
  return index;
  for (let i = 0; i < haystack.length; i++) {
    let j = i;
    let found = true;
    for (let char of needle) {
      if (j === haystack.length) {
        found = false;
        break;
      }
      if (haystack[j] !== char) {
        found = false;
        break;
      }
      j++;
    }
    if (found) {
      index = i;
      break;
    }
  }
  return index;
};

const testCases = [
  {
    haystack: "sadbutsad",
    needle: "sad",
  },
  {
    haystack: "leetcode",
    needle: "leeto",
  },
];

for (const testCase of testCases) {
  console.log(strStr(testCase.haystack, testCase.needle));
}
