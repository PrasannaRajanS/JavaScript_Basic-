
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
    name : "Prasanna",
    age : 23,
    gender : "male"
}

// using Dot Notation
console.log(personalData.name);

// using Bracket Notation
console.log(personalData['age']);

// nested object
let personalInfo = {
    name : "Prasanna",
    address : {
        state : 'Tamil Nadu',
        district :'Cuddalore',
        pinCode : 607303
    },
    phoneNumber: 6382083939 
}

// using Dot Notation in nested object
console.log(personalInfo.name);
console.log(personalInfo.address.state);