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

