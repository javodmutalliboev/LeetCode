/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let sum = [];

  const length_a = a.length;
  const length_b = b.length;

  let carry = 0;
  if (length_a < length_b) {
    for (let i = length_a - 1, j = length_b - 1; i >= 0; i--, j--) {
      if (a[i] === "0" && b[j] === "0") {
        if (carry === 1) {
          sum.unshift("1");
          carry = 0;
        } else {
          sum.unshift("0");
        }
      } else if (a[i] === "0" && b[j] === "1") {
        if (carry === 1) {
          sum.unshift("0");
          carry = 1;
        } else {
          sum.unshift("1");
        }
      } else if (a[i] === "1" && b[j] === "0") {
        if (carry === 1) {
          sum.unshift("0");
          carry = 1;
        } else {
          sum.unshift("1");
        }
      } else if (a[i] === "1" && b[j] === "1") {
        if (carry === 1) {
          sum.unshift("1");
        } else {
          sum.unshift("0");
        }
        carry = 1;
      }
    }
    for (let i = length_b - length_a - 1; i >= 0; i--) {
      if (b[i] === "0") {
        if (carry === 1) {
          sum.unshift("1");
          carry = 0;
        } else {
          sum.unshift("0");
        }
      } else if (b[i] === "1") {
        if (carry === 1) {
          sum.unshift("0");
          carry = 1;
        } else {
          sum.unshift("1");
        }
      }
    }
    if (carry === 1) {
      sum.unshift("1");
      carry = 0;
    }
  } else {
    for (let i = length_b - 1, j = length_a - 1; i >= 0; i--, j--) {
      if (a[j] === "0" && b[i] === "0") {
        if (carry === 1) {
          sum.unshift("1");
          carry = 0;
        } else {
          sum.unshift("0");
        }
      } else if (a[j] === "0" && b[i] === "1") {
        if (carry === 1) {
          sum.unshift("0");
          carry = 1;
        } else {
          sum.unshift("1");
        }
      } else if (a[j] === "1" && b[i] === "0") {
        if (carry === 1) {
          sum.unshift("0");
          carry = 1;
        } else {
          sum.unshift("1");
        }
      } else if (a[j] === "1" && b[i] === "1") {
        if (carry === 1) {
          sum.unshift("1");
        } else {
          sum.unshift("0");
        }
        carry = 1;
      }
    }
    for (let i = length_a - length_b - 1; i >= 0; i--) {
      if (a[i] === "0") {
        if (carry === 1) {
          sum.unshift("1");
          carry = 0;
        } else {
          sum.unshift("0");
        }
      } else if (a[i] === "1") {
        if (carry === 1) {
          sum.unshift("0");
          carry = 1;
        } else {
          sum.unshift("1");
        }
      }
    }
    if (carry === 1) {
      sum.unshift("1");
      carry = 0;
    }
  }

  return sum.join("");
};

const [a, b] = ["11", "1"];
console.log(addBinary(a, b));

const [c, d] = ["100", "110010"];
console.log(addBinary(c, d));
