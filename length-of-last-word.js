/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const word_list = s.trim().split(" ");
  return word_list[word_list.length - 1].length;

  let length = 0;
  let k = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === " " && s[i + 1] !== " ") {
      k = i + 1;
    }
  }
  for (let i = k; i < s.length; i++) {
    if (s[i] === " ") {
      break;
    }
    length++;
  }
  return length;
};

const testCases = [
  "Hello World",
  "   fly me   to   the moon  ",
  "luffy is still joyboy",
];

for (const testCase of testCases) {
  console.log(lengthOfLastWord(testCase));
}
