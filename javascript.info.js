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
