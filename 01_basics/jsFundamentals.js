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

//add element at the end
const myArray = ['love', "peter", 'thomas'];
myArray.push('mike');
console.log(myArray);

// add element in beginning
myArray.unshift('newfriend');
console.log(myArray);

// remove elements from end
myArray.pop();
console.log(myArray);

// remove element from start
myArray.shift();
console.log(myArray);

// find index of specific element
console.log(myArray.indexOf('mike'));

// check if elements is arrays or not
console.log(myArray.includes("mike"));
console.log(myArray.includes("love"));


// Objects
const me = {
    firstName: 'Love',
    age: 24,
    job: "tester",
};
console.log(me);
console.log(me.age);
console.log(me['age']);

const mySelf = {
    firstName: "love",
    birthYear: 1997,
    married: false,
    friends: ['mark', 'john'],
    calcAge: function (birthYear) {
        return 2023 - birthYear;
    }
}
console.log("Age is " + mySelf.calcAge(mySelf.birthYear));
console.log(mySelf);


const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(mark.bmi);
if (mark.bmi < john.bmi) {
    console.log(`${mark.bmi} BMI`);
}
else if (mark.bmi > john.bmi) {
    console.log(`${john.bmi} BMI`);
}