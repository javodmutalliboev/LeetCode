/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(s[i]);
        break;
      case ")":
        if (stack.at(stack.length - 1) !== "(") {
          return false;
        }
        stack.pop();
        break;
      case "{":
        stack.push(s[i]);
        break;
      case "}":
        if (stack.at(stack.length - 1) !== "{") {
          return false;
        }
        stack.pop();
        break;
      case "[":
        stack.push(s[i]);
        break;
      case "]":
        if (stack.at(stack.length - 1) !== "[") {
          return false;
        }
        stack.pop();
        break;
      default:
        console.log(s[i]);
        break;
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};

console.log(isValid("["));
