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