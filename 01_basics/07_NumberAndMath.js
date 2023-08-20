'use strict';
const score = 1234;
console.log(score);
//explicitly define number data type
const accountNumber = new Number(10101);
console.log(accountNumber);
console.log(accountNumber.toString());
console.log(accountNumber.toString().length);

const newNumber = new Number(10101.234);
console.log(newNumber.toFixed(4));

const anotherNumber = 23.4535;
console.log(anotherNumber.toPrecision(3)); //23.5

const oneNumber = 100000;
console.log(oneNumber.toLocaleString('en-IN'));

// Maths
console.log('Maths -- -- - ')
console.log(Math.PI.toFixed(2));
console.log(Math.abs(-345));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(2, 0, 1, 4));
console.log(Math.max(2, 0, 1, 4));
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


