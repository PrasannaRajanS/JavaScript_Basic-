
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

// Objects

// OOP (Object-Oriented Programing)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    isVisible: true,
    draw: function () {
        console.log("This is draw function");
    }
}

circle.draw()  // We call it as a Method 

// Factory Function Single defenation for draw method
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

// Two - different draw object
const circle1 = createCircle(1)
console.log(circle1);

const circle2 = createCircle(2)
console.log(circle2);

// Camel Notation : oneTwoThree
// Pascal Notation : OneTwoThree

// Constructor Function 
function Circle(radius) {
    this.radius = radius   // this is a keyword reference to the object execute this piece of code
    this.draw = function () {
        console.log("Draw");

    }
}

const circleIs = new Circle(1)  // here new will create empty JavaScript Object
console.log(circleIs);

// Dynamic Nature Of Object   // we Can add new properties, method and remove existing one
const MyCircleIs = {
    radius: 1
}

MyCircleIs.color = 'Red'
MyCircleIs.draw = function () { }

delete MyCircleIs.color
delete MyCircleIs.draw

console.log(MyCircleIs);

new String() // '',"".``  String Literals
new Boolean() // true false Boolean Literals
new Number() // 1,2,3 ... Number Literals

// Every Object In JavaScript has a constructor property 

function Circle1(radius) {
    this.radius = radius
    this.draw = function () {
        console.log("Draw");

    }
}

Circle1.call({}, 1) // the curly brases represent this keyword here
Circle1.apply({}, [1, 2, 3, 4])

const circleIs1 = new Circle(1) // If we did't give new here it will reperesent global object window here

// Values VS Refereance type

// Primitives are copied by their value   // Objects are copied by their referance
let firstValue = 10
let secondValue = firstValue  // here first value and second values are independent
firstValue = 20
console.log(firstValue);
console.log(secondValue);

let firstObject = { value: 10 }
let secondObject = firstObject // here object values are storing some were in memory the using it
firstObject.value = 20

console.log(firstObject);
console.log(secondObject);

// Here the two values are independent in primitive type
let Value1 = 10
function increase(Value1) {
    return Value1++;
}

increase(Value1)
console.log(Value1);

let Obj = { value: 10 }
function increase(Obj) {
    return Obj.value++;
}

increase(Obj)
console.log(Obj);

// Enumerating Properties of an  Object

const oneCircle = {
    radius: 1,
    draw() {
        console.log('draw');

    }
}

for (let key in oneCircle) {
    console.log(key, oneCircle[key]);
}

for (let key of Object.keys(oneCircle)) {
    console.log(key);
}

for (let key of Object.entries(oneCircle)) {
    console.log(key);
}

if ('radius' in oneCircle) console.log("Yes");

// Cloning an Object
const clonObj = {
    radius: 1,
    draw() {
        console.log('draw');

    }
}

// const anotherObj = {}
// for (let key in clonObj)
//     anotherObj[key] = clonObj[key]

// const anotherObj = Object.assign({},clonObj)
const anotherObj = { ...clonObj }
console.log('anotherObj', anotherObj);

Math.random()

const message = "  My name is prasanna  "
console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('My'));
console.log(message.includes('are'));
console.log(message.startsWith('My'));
console.log(message.startsWith('my'));
console.log(message.endsWith('anna'));
console.log(message.endsWith('name'));
console.log(message.replace('prasanna', 'Rajan'));
console.log(message.toLocaleLowerCase());
console.log(message.toLocaleUpperCase());
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());

const address = {
    street: "Marai Malai Adigalar Salai",
    city: "Vadalur",
    zipCode: 607303
}

function showAddress(address) {
    for (let data in address)
        console.log(data, ':', address[data]);
}

showAddress(address)

function factorialObject(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
        address() {
            console.log("Cuddalore Distc");
        }
    }
}

const FactObj = factorialObject("Marai Malai Adigalar Salai", "Vadalur", 607303)
console.log(FactObj);


function ConstFun(street, city, pinCode) {
    this.street = street
    this.city = city
    this.pinCode = pinCode
}

let dataIs = new ConstFun("Anna Nagar", 'chennai', 600028)
let dataIs1 = new ConstFun("Anna Nagar", 'chennai', 600028)
console.log(dataIs);

function areEqual(dataIs, dataIs1) {
    return dataIs.street === dataIs1.street &&
        dataIs.city === dataIs1.city && dataIs.pinCode === dataIs1.pinCode
}

function areSame(dataIs, dataIs1) {
    return dataIs === dataIs1
}

console.log(areSame(dataIs, dataIs1)); // this is checking they are same object

console.log(areEqual(dataIs, dataIs1)); // this is checking they are same values

let post = {
    title: 'Book',
    body: 'about the book',
    author: 'book author',
    views: 10,
    Comments: [
        { author: 'author - 1', body: 'Book Body - 1' },
        { author: 'author - 2', body: 'Book Body - 2' },
    ],
    isLive: true
}

console.log(post);


function BookPost(title, body, author) {

    this.title = title
    this.body = body
    this.author = author
    this.views = 0
    this.Comments = []
    this.isLive = false
}

let PostOne = new BookPost('Book Name', 'Book Description', 'Book Author')
console.log(PostOne);

let priceRanges = [
    { lable: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { lable: '$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { lable: '$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

let restaurants = [
    { averagePerPerson: 5 }
]

// Adding Elements 

const numbers = [3, 4]

numbers.push(5, 6)   // It will add in the end 

numbers.unshift(1, 2) // It will add in the Start

numbers.splice(0, 0, 'a', 'b', 'c', 'd') // It will add in the Middle

console.log(numbers);

// Finding elements

const arrNum = [1, 2, 3, 4, 1, 5]

console.log(arrNum.indexOf(1));
console.log(arrNum.lastIndexOf(1));
console.log(arrNum.indexOf(1) !== -1);
console.log(arrNum.includes(1));


const courses = [
    { id: 1, nameIs: 'Prasanna' },
    { id: 2, nameIs: 'Rajan' },
]

const course = courses.find(courses => courses.nameIs === 'Prasanna')
console.log(course);

const numberIsArr = [1, 2, 3, 4, 5]

// Remove the end of the array
const last = numberIsArr.pop();
console.log(numberIsArr);

const numberIsArrOne = [1, 2, 3, 4, 5]
// Remove the Beginning of the array
const first = numberIsArrOne.shift();
console.log(numberIsArrOne);

const numberIsArrTwo = [1, 2, 3, 4, 5]
// Remove the Middle of the array
numberIsArrTwo.splice(2, 2)
console.log(numberIsArrTwo);


let EmptArr = [1, 2, 3, 4, 5]
let AsignArr = EmptArr
// solution 1
EmptArr = []

// solution 2
EmptArr.length = 0

// solution 3
EmptArr.splice(0, EmptArr.length)

console.log(EmptArr);
console.log(AsignArr);

const firstNumber = [1, 2, 3]
const SecondNumber = [4, 5, 6]

const combined = firstNumber.concat(SecondNumber)
console.log('combined', combined);

const spreadArrOne = [4, 5, 6]
const spreadArrTwo = [7, 8, 9]

const UsingSpreadArr = [...spreadArrOne, 'a', ...spreadArrTwo, 'b']
const CombineSpreadArr = { ...UsingSpreadArr }

console.log(CombineSpreadArr);

const numbersOne = [1, 2, 3]

for (let numbers of numbersOne)
    console.log(numbers);

numbersOne.forEach((numbers, index) => console.log(index, numbers))

const numbersAre = [1, -1, 2, 3, 4]
console.log(numbersAre);

const sumIs = numbersAre.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(sumIs);

// Hoisting 
host("Prasanna")

function host(name) {
    console.log(name);
}

// Arguments
function SumVal() {
    let total = 0
    for (let value of arguments)
        total += value
    return total;
}

console.log(SumVal(1, 2, 3, 4, 5, 10));


function DefaultPram(TotalFee, price = 3.5, year) {
    return TotalFee * price/100*year
}

console.log(DefaultPram(10000,undefined,5));

// Gettter and Setter
const person = {
    firstName : 'Prasanna',
    lastName : 'Rajan',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error("Value is not a string");
            
        const parts = value.split(' '); 
        if(parts.length !== 2)
            throw new Error("Enter First Name and Last Name");
                   
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    person.fullName = "Mike Tyson"
} catch (error) {
    alert(error)
}
console.log(person);

