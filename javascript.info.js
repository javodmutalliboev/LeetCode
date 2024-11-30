// alert("I'm JavaScript!");

/*
alert("Hello");
/*
[1, 2].forEach(alert);
*/

// "use strict" should be at the top
/*
(function () {
    "use strict";
    
    // ...your code here...
})();
*/

/*
let message;
message = 'Hello!';
*/

"use strict";

/*
let admin;
let name;
name = "John";
admin = name;
alert(admin);

let ourPlanetName = "Earth";
let currentUserName = "John";

const BIRTHDAY = "18.04.1982";

const age = someCode(BIRTHDAY);

const BIGINT = 1234567890123456789012345678901234567890n;

let name = prompt("What is your name?", "");
alert(name);
*/

/*

"" + 1 + 0 = "10"
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2


let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12

let name = prompt("What is the official name of JavaScript?", "");

if (name == "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? ECMAScript!");
}

let number = prompt("Enter a number", 0);

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

let result = a + b < 4 ? "Below" : "Over";

let message =
login == "Employee"
? "Hello"
: login == "Director"
? "Greetings"
: login == ""
? "No login"
: "";



if (age >= 14 && age <= 90) {
    }
    
    let age = 10;
    
    if (age < 14 || age > 90) {
    }
    
    if (!(age >= 14 && age <= 90)) {
    }
    
    const user = prompt("Who's there?", "");
    if (user) {
        if (user === "Admin") {
    const password = prompt("Password?", "");
    if (password) {
        if (password === "TheMaster") {
            alert("Welcome!");
        } else {
            alert("Wrong Password");
    }
} else {
    alert("Canceled");
}
} else {
    alert("I don't know you");
}
} else {
    alert("Canceled");
}

// nullish coalescing read

// prime number

const n = +prompt("Enter value for n", "");
nextPrime: for (let i = 2; i <= n; i++) {
    //   let divider_count = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue nextPrime;
        }
    }
    //   if (divider_count == 2) {
        alert(i + ": prime number");
        //   }
    }
    
    
    const browser = "Chrome";
    if (browser === "Edge") {
        alert("You've got the Edge!");
    } else if (
        browser === "Chrome" ||
        browser === "Firefox" ||
        browser === "Safari" ||
        browser === "Opera"
    ) {
        alert("Okay we support these browsers too");
    } else {
        alert("We hope that this page looks ok!");
}


let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert(2, 3);
    break;
  default:
    break;
}


function checkAge(age) {
  //   return age > 18 || confirm("Did parents allow you?");
  return age > 18 ? true : confirm("Did parents allow you?");
}


function min(a, b) {
  return a < b ? a : b;
}


function pow(x, n) {
  let result = 1;
  while (n) {
    result *= x;
    n--;
  }
  return result;
}

alert(pow(3, 2));



// function expressions read

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);


let num = (1, 2);
alert(num);



function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(
    `Power ${n} is not supported, please enter an integer number greater than zero`
  );
} else {
  alert(pow(x, n));
}
*/

// comments read
// ninja-code read

/*
it("Raises x to the power n", function () {
    let x = 5;
    
    let result = x;
    assert.equal(pow(x, 1), result);
    
    result *= x;
    assert.equal(pow(x, 2), result);
    
    result *= x;
    assert.equal(pow(x, 3), result);
});
*/

/*
describe("Raises x to power n", function () {
    it("5 in the power of 1 equals 5", function () {
        assert.equal(pow(5, 1), 5);
    });
    
  it("5 in the power of 2 equals 25", function () {
    assert.equal(pow(5, 2), 25);
});
  
  it("5 in the power of 3 equals 125", function () {
      assert.equal(pow(5, 3), 125);
    });
});

function pow(x, n) {
    if (n === 0) {
        return 1;
    }
    return x * pow(x, n - 1);
}

mocha.run();
*/

// polyfills read

/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/

/*
let schedule = {};

/**
 * @param {object} obj
 * @returns {boolean}

function isEmpty(obj) {
  for (let key in obj) {
    return false;
}
return true;
}

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule));
*/

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

alert("Sum: " + sum);
*/

/*
let menu = {
    width: 200,
    height: 300,
  title: "My menu",
};

/**
 *
 * @param {object} menu
 
function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] *= 2;
    }
}
}

multiplyNumeric(menu);

console.log(menu);
*/

/*
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        },
    };
}

let user = makeUser();
alert(user.ref().name);
*/

/*
let calculator = {
  read() {
    this.a = +prompt("a?", "");
    this.b = +prompt("b?", "");
  },
  
  sum() {
    return this.a + this.b;
  },
  
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/

/*
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
*/

/*
const obj = {};

function A() {
  // this.name = "A";
  return obj;
}

function B() {
  // this.name = "A";
  return obj;
}

let a = new A();
let b = new B();

alert(a == b);
*/

/*
function Calculator() {
  this.read = () => {
    this.a = +prompt("a?", "");
    this.b = +prompt("b?", "");
  };
  this.sum = () => this.a + this.b;
  this.mul = () => this.a * this.b;
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
*/

/*
/**
 * @param {number} startingValue
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt("How much to add?", 0);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
*/

/*
let obj = {
  "full name": "Javod Mutalliboev",
};

alert(obj?.["full name"]);

obj.greet?.();
*/

/*
let obj = {
  name: "John",
  money: 1000,
  
  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint === "string" ? `{name: "${this.name}"}` : this.money;
  },
};

alert(obj);
alert(+obj);
alert(obj + 500);
*/

/*
let str = "Hello";

str.test = 5;

alert(str.test);
*/

/*
const a = +prompt("a?");
const b = +prompt("b?");

alert(a + b);
*/

/*
alert(Math.round(6.35 * 10) / 10);
*/

/*
function readNumber() {
  let num;
  
  do {
    num = prompt("Enter a number", 0);
  } while (!isFinite(num));
  
  if (num === null || num === "") return null;
  
  return +num;
}

alert(`Read: ${readNumber()}`);
*/

/*
function random(min, max) {
  return Math.random() * (max - min) + min;
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
*/

/*
const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggae");
alert(styles);
*/
/*
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2]();
*/

/*
function sumInput() {
  const arr = [];
  
  let num;
  do {
    num = prompt("Enter a value?", 0);
    if (isFinite(num)) {
      arr.push(+num);
    }
  } while (num !== "" && num !== null && isFinite(num));
  
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  
  return sum;
}

alert(sumInput());
*/

/**
 * @param {Array<number>} arr
 * @returns {number}
 
function getMaxSubSum(arr) {
  
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  
  let max = 0;
  let partialSum = 0;
  
  for (let item of arr) {
    partialSum += item;
    max = Math.max(max, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  
  return max;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([2, -1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([-1, -2, -3]));

*/

/*
/**
 *
 * @param {String} str
 * @returns {String}

function camelize(str) {
  const result = str
  .split("-")
  .map((word, i) => (i == 0 ? word : word[0].toUpperCase() + word.slice(1)))
  .join("");
  
  return result;
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

*/

/*
/**
 *
 * @param {Array<number>} arr
 * @param {number} a
 * @param {number} b
 * @returns {Array<number>}

function filterRange(arr, a, b) {
  const result = arr.filter((num) => num >= a && num <= b);
  return result;
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)
*/

/*
/**
 *
 * @param {Array<number} arr
 * @param {number} a
 * @param {number} b

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr); // [3, 1]
*/

/*
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
arr.sort((a, b) => b - a);

alert(arr); // 8, 5, 2, 1, -10
*/

/*
/**
 *
 * @param {Array<string>} arr
 * @returns {Array<string>}

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

*/

/*
function Calculator() {
  /**
   *
   * @param {string} name
   * @param {Function} func
  
 this.addMethod = function (name, func) {
   this[name] = func;
  };
  
  /**
   *
   * @param {string} str
   * @returns {number}
  
 this.calculate = function (str) {
   const arr = str.split(" ");
   const methodName = Object.getOwnPropertyNames(this).find(
     (name) => name === arr[1]
    );
    return this[methodName]?.(arr[0], arr[2]);
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8

*/

/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name); /* ... your code 

alert(names); // John, Pete, Mary
*/

/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  id: user.id,
  fullName: user.name + " " + user.surname,
})); /* ... your code ... 

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith

*/

/*

/**
 *
 * @param {Array<*>} users

function sortByAge(users) {
  users.sort((user1, user2) => user1.age - user2.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

*/

/*

/**
 *
 * @param {Array<number>} array
 
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

shuffle(arr);
alert(arr);
// arr = [3, 2, 1]

shuffle(arr);
alert(arr);
// arr = [2, 1, 3]

shuffle(arr);
alert(arr);
// arr = [3, 1, 2]
// ...

*/

/*
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// counts of appearances for all possible permutations
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// show counts of all possible permutations
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

*/

/*

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// counts of appearances for all possible permutations
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// show counts of all possible permutations
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

*/

/*
/**
 *
 * @param {Array<*>} users
 * @returns {number}

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
*/

/*

/**
 *
 * @param {Array<string>} arr
 * @returns {Array<string>}

function unique(arr) {
  /* your code 
  let result = [];
  
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O

*/

/*
/**
 *
 * @param {Array<*>} arr
 
function groupById(arr) {
  const result = {};
  
  arr.reduce((prev, cur) => {
    prev[cur.id] = cur;
    return prev;
  }, result);
  
  return result;
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.dir(usersById.ann.age);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

*/

/*
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  alert(num);
}
*/

/*

/**
 *
 * @param {Array<string>} arr
 * @returns {Array<string>}

function unique(arr) {
  // const result = new Set(arr);
  // result.toString = function () {
    //   let result = "";
  //   for (const item of this) {
  //     result += item + ", ";
  //   }
  //   return result;
  // };
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values)); // Hare, Krishna, :-O

*/

/*

/**
 *
 * @param {Array<string>} arr
 * @returns {Array<string>}
 
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

*/

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);
