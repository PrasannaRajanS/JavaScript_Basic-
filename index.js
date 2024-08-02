
// There are three types Variables .It is an temporary memory locator

var nameIs = "Prasanna"
let ageIs = 23
const addressIs = "Vadalur"

//  Primitive data/value type    Reference type

// string                       Object 
// number                       Array
// boolean                      function
// undefined
// null

let personalData = {
    name: "Prasanna",
    age: 23,
    gender: "male"
}

// using Dot Notation
personalData.name = "Rajan"
console.log(personalData.name);

// using Bracket Notation
personalData['age'] = 24
console.log(personalData.age);

// nested object
let personalInfo = {
    name: "Prasanna",
    address: {
        state: 'Tamil Nadu',
        district: 'Cuddalore',
        pinCode: 607303
    },
    phoneNumber: 6382083939
}

// using Dot Notation in nested object
console.log(personalInfo.name);
console.log(personalInfo.address.state);

// Array concept
let colors = ['red', 'green', 'blue']
console.log('this are colors getting with array', colors[0]);
console.log('We are defining array length here -', colors.length);

// function concept
function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}
greet('Prasanna')

// calculating a Value
function doubleTheValue(numberIs) {
    return numberIs * numberIs
}
console.log(doubleTheValue(10));

// JavaScript Operators 
// Arithmetic operator , Assignment operator , Comparison operator , Logical operator , Bitwise operator

// Arithmetic Operator : 
let x = 7;
let y = 3;

console.log('Addition', x + y);
console.log('Subtraction', x - y);
console.log('Multiplication', x * y);
console.log('Division', x / y);
console.log('Remainder of Division', x % y);
console.log('exponentiation', x ** y);

// Increment Operator
console.log("increment", x++);
console.log("increment", x);

// Decrement Operator
console.log("Decrement", x--);
console.log("Decrement", x);

// Assignment Operator
let assignValue = 20

assignValue = assignValue + 5
assignValue += 5

console.log(assignValue);

assignValue *= 2
console.log(assignValue);

// Comparision Operators
let comparNum = 7

// Relation
console.log(comparNum > 4);
console.log(comparNum >= 4);
console.log(comparNum < 4);
console.log(comparNum <= 4);
// Equality
console.log('Strict Equality Operator', comparNum === '7');   // Strict Equality Operator it will check (Type + Value)
console.log(comparNum !== 4);

console.log('Lose Equality Operator', comparNum == '7');   // Lose Equality Operator it will check (Value)


// Ternary Operator
let points = 90
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);

// Logical Operator (&&) - (||)

// Logical AND (&&)
// Return true both operands are true
console.log(false && true);
console.log(true && false);

// Logical Operator

let highIncome = false
let goodCreaditScore = false
let eligibleForLone = highIncome && goodCreaditScore    // And Operator (&&)

console.log('Eligible', eligibleForLone);


eligibleForLone = highIncome || goodCreaditScore    // or Operator ||

console.log('Eligible', eligibleForLone);

// Not Operator
let applicationRefused = !eligibleForLone
console.log('Application Refused', applicationRefused);

function Operator(params) {

    if (params % 5 === 0 && params % 3 === 0) {
        console.log('The Value is Div by both 5 & 3');
    }
    else if (params % 5 === 0) {
        console.log('The Value is Div by 5');
    }
    else if (params % 3 === 0) {
        console.log('The Value is Div by 3');
    }
}

Operator(10)

// Falsy  (false)           Anything is not falsy -> Truthy
// undefined
// null
// 0
// false
// ''
// NaN 

// What is the value of y? 

let numX = 10;

let numY = (numX > 5) && (numX < 15);
console.log('What is the value of y', numY);

// If else Condition
let hour = 5
if (hour >= 6 && hour < 12) console.log('Good Morning');
else if (hour >= 12 && hour < 6) console.log('Good Afternoon');
else console.log('Good Evening');


// Switch Case Condition
let roleIs;

switch (roleIs) {
    case 'User':
        console.log('LogIn User');
        break;

    case 'Admin':
        console.log('LogIn Admin');
        break;

    default:
        console.log("Unkonown User");
        break;
}


// LOOPS  For , While , Do ..While , For..in , For..of
// initial expression , condition , increment expression

// For Loop
let src = " "
for (let i = 1; i < 5; i++) {
    src = ""
    for (let k = 1; k <= i; k++) {
        src += " *"
    }
    console.log(src);
}

let num = 10
for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log('For Loop', i);
    }
}

// While Loop
i = 1
while (i <= num) {
    if (i % 2 === 0) {
        console.log("While Loop", i);
        i++;
        continue
    }
    console.log('While Loop', i);
    i++;

}

// Do ..While Loop even while the condition is false the value will be print once

i = 11
do {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++
} while (i <= num);

let students = {
    nameIs: "Prasanna",
    ageIs: 23,
    depatment: ['Mechanical', 'EEE', 'CSE']
}

for (let singlePerson in students) {
    console.log(students[singlePerson])
    if (singlePerson == 'depatment') {
        for (let val of students[singlePerson]) {
            console.log(singlePerson, val);
        }
    }
}

function fizzBuzz(valueIs) {
    if (valueIs % 5 === 0 && valueIs % 3 === 0) {
        console.log('FizzBuzz');
    } else if (valueIs % 5 === 0) {
        console.log('Fizz');
    } else if (valueIs % 3 === 0) {
        console.log('Buzz');
    }
}

fizzBuzz(15)

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5
    if (speed < speedLimit + kmPerPoint) console.log("OK");
    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12) console.log("Your Licence is Suspended because your Speed is above", speed, "km");
    else console.log("Points", points);
}

checkSpeed(130)


function oddEven(ValueIs) {
    for (let i = 0; i <= ValueIs; i++) {
        const message = (i % 2 === 0) ? "Even" : "Odd";
        console.log(i, message);
    }
}
oddEven(10)

const array = [0, null, undefined, '', 1, 2, 3]
console.log(array);

function countTruthy(Value) {
    let count = 0;
    for (let value of Value) {
        if (value) {
            count++
            return count;
        }
    }
}

console.log(countTruthy(array));


const movie = {
    title: 'Indian - 2',
    releaseYear: 2024,
    rating: 7.1,
    director: 'Shankar'
}

function showIs(title) {
    for (let show in title)
        if (typeof title[show] == 'string')
            console.log(show, ":", title[show]);
}

showIs(movie)

function sum(limit) {
    let sum = 0
    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i
    return sum
}

console.log(sum(5));


const marks = [90, 90, 93]

function calculateAverage(arrayValue) {
    let valueIs = 0
    for (let total of arrayValue)
        valueIs += total
    return valueIs / arrayValue.length
}

function totalMark(mark) {
    const average = calculateAverage(mark)
    if (average <= 59) return 'F'
    else if (average <= 69) return 'D'
    else if (average <= 79) return 'C';
    else if (average <= 89) return 'B'
    else if (average <= 100) return 'A'
}

console.log(totalMark(marks));

function showStars(rows) {

    for (let row = 0; row <= rows; row++) {
        let pattern = ''
        for (let i = 0; i < row; i++) {
            pattern += "*"
        }
        console.log(pattern);
    }
}
showStars(5)

