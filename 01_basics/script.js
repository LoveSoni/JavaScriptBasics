let js = "amazing";
console.log(40 + 8 + 37);
console.log("love");

//string data type
let firstName = "love"
let lastName = "soni";
console.log(firstName + " " + lastName);
console.log("test ")

//boolean data type
let jsIsFun = true;
console.log(jsIsFun);

// typeOf operator : to check the data type
console.log(typeof jsIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 23.34);
console.log(typeof 'love');


// undefined data type
let undefVariable;
console.log(undefVariable);
// check the type
console.log(typeof undefVariable);


console.log(typeof null);


// let const and var
let age = 30;
age = 25;
console.log(age);

var newAge = 25;
newAge = 26;
console.log(newAge);

const birthyear = 4;
// birthyear = 25; this is not possible
console.log(birthyear);



// Operators
// 1. Arithmetic Operator
const ageLove = 2023 - 1997
console.log(ageLove);
console.log(ageLove * 2, ageLove / 2, ageLove % 2);

const fName = "love"
const lName = "."
console.log(fName + " " + lName)

//Assignment Operator
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
console.log(x *= 10);
console.log(x -= 10);

x++
console.log(x);
x--
console.log(x);

// Relationa operator
let number1 = 10;
let number2 = 20;
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);


//string literal

const newText = `hii my name is ${number1}`;
console.log(newText);

// if else
const driverAge = 9;
const isOldEnough = (driverAge >= 18);
console.log(isOldEnough)
if (isOldEnough) {
    console.log('allowed');
}
else { console.log("not allowed") }


// type conversion
//string to number
const inputYear = "19997"
console.log(Number(inputYear))
console.log(Number(inputYear) + 18);


console.log(Number('hello'));

// number to string
console.log(String(23));


// type coercion
console.log('I am ' + 24 + "years old");
console.log('23' - '10' - 3);
console.log('23' * '2');

//Truthy and falsy values
// 5 falsy values: 0 '' null NAN undefined
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined))
console.log(Boolean(true))
console.log(Boolean(-10));
console.log(Boolean('%@#$ASF'))
console.log(Boolean(123));

// Equality Operator
// ==       ===
const myAge = 18;
if (myAge === 18)
    console.log('age is equaly to 18');

console.log('18' == 18);

if (myAge == '18')
    console.log('age is equaly to 18');

// Prompt and alert on webpage
// const userInput = prompt('Hey bro! how are you doing');
// console.log(userInput);
// if (userInput === 'good')
//     alert("Ah! I see");

// Logical Operator
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDriver = hasDriversLicense && hasGoodVision;
if (shouldDriver) {
    console.log("She is eligible to drive");
}
else {
    console.log("she can't driver");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

// switch statement
const day = 'tuesday'
switch (day) {
    case "monday":
        console.log("Today is monday");
        break;
    case "tuesday":
        console.log("Today is tuesday");
        break;
    case "wednesday":
        console.log("Today is wednesday");
        break;
    case "thursday":
        console.log("today is thursday");
        break;
    case "friday":
        console.log("today is friday");
        break;
    default:
        console.log("nope");
}

// Ternary operator
const agee = 23;
age >= 18 ? console.log('i like to drink mocktails') : console.log('You should not consume alhocal');