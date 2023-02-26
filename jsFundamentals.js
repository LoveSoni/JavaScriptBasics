'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log("i can driver");
}

// Function
function logger(name) {
    console.log('my name is ' + name)
}
logger('love');
logger('peter');

// receive argument
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

console.log(fruitProcessor(2, 3));

function calAge(birthYear) {
    const age = 2023 - birthYear;
    return age;
}

console.log(calAge(1997));

// function expression

const calculateAge = function (birthYear) {
    const age = 2023 - birthYear;
    return age;
}
console.log('Calculated age using expression function' + calculateAge(1997));

// Arrow function
// single parameter and single line function
const calcAge3 = (birthyear) => 2023 - birthyear;
console.log(calcAge3(1997));


// single parameter and multiple line function
const yearsUntilRetirement = (birthYear) => {
    const currentAge = 2023 - birthYear;
    const retirementAge = 70;
    return retirementAge - currentAge;
}
console.log(yearsUntilRetirement(1997));

const yearRemainingForRetirement = (name, birthYear) => {
    const currentAge = 2023 - birthYear;
    const standardRetirementAge = 70;
    const retirementAge = standardRetirementAge - currentAge;
    const msg = `Hello ${name}, your retirement age is ${retirementAge}`;
    return msg;
}

console.log(yearRemainingForRetirement('love', 1997));

//arrays
const friendArray = ['love', 'peter']
console.log(friendArray);

//another way of creating array
const years = new Array(1991, 1992, 1992);
console.log(years);
//indexing on array
console.log(years[0]);
// length of array
console.log(years.length);


const love = ['love', 'lastname', 2023 - 1997];
console.log(love);



//Array Methods

const myArray = ['love', "peter", 'thomas'];
myArray.push('mike');
console.log(myArray);