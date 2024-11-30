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
