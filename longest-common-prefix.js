/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  let char_i = 0;
  let lcp = "";
  while (strs[0][char_i]) {
    let common = true;
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i][char_i]) {
        return lcp;
      }
      if (strs[0][char_i] !== strs[i][char_i]) {
        common = false;
      }
    }
    if (common) {
      lcp += strs[0][char_i];
    } else {
      return lcp;
    }
    char_i++;
  }
  return lcp;
};

console.log(longestCommonPrefix(["flower"]));
