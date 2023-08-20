'use strict'
// Note: Javascript is a dynamic type language
// typescript is a static type language
// a) Primitive data type: 7
/*
    String, number, float, double, boolean, null, undefined, symbol, BigInt
*/

const scoore = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol(123);
const anotherId = Symbol(123);

console.log(id == anotherId);
const bidNumber = 123134234234235;
// b) Non Primitive data type(reference)
/*
    object, array, functions
*/

const dishes = [1, 2, 4];
console.log(dishes);
const employee = {
    name: "love",
    age: 26
}
console.log(employee);


let print = function () {
    console.log('hello world')
}
console.log(typeof NaN)

//  type of
console.log(typeof undefined); // undefined
console.log(typeof null); // Object
console.log(typeof NaN); // Number