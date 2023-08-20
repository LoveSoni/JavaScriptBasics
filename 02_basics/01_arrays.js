'use strict'
const myArray = [0, 2, 5, 6, true, "love"];
// array in javascript can have different types of values
// arrays are resizable in java
// elements are stored in indexed
// array in js are shallow copy [same reference is passed to a new variable]
console.log(myArray);

// get element
console.log(myArray[4])

// another way to declare array
const websites = new Array(1, 2, 3, 5);
// or
const websites1 = new Array();
websites1[0] = 'google';
websites1[1] = 'youtube';
websites1[2] = 'chatgpt';
console.log(websites);
console.log(websites1);


////// Methods
// a) push: to add element in the last
websites1.push('yahoo');
console.log(websites1);

// b) pop: to remove last element from the array
websites1.pop();
console.log(websites1);

// c) unshift: to add element at the beginning
websites1.unshift("apple");
console.log(websites1);

// d) shift: to remove element from the start
websites1.shift();
console.log(websites1);

// e) includes: to check element exist or not
console.log(websites1.includes('google'));

// f) indexOf: to get the index number of a element
// if element not found then it will return -1
console.log(websites1.indexOf('chatgpt'));

// g) join: to convert array to a string
// websites1.push(null);
const myArray1 = websites1.join();
console.log(websites1);
console.log(myArray1);


// slice vs splice
websites1.push('audi'); websites.push("bmw");
console.log('arrayA ', websites1);
let myn1 = websites1.slice(1, 3);
console.log(myn1);
console.log('arrayB ', websites1);

console.log('arrayA ', websites1);
let myn2 = websites1.splice(1, 3);
console.log(myn2);
console.log('arrayB ', websites1);

// Note:
//Slice vs splice
// 1) in slice end is not included e.g. myArray(1,3) then 3 will not be included
// 1) in splice end is also included e.g. myArray(1,3) then 3 will be included
// 2) slice does not manipulate the original array e.g. myArray(1,3) -> it will only return the element given in range, nothing will  //change   to original array
// 2. splice will maniuplate the original array e.g. myArray(1,3) -> it will remove the element from 1 to 3 range from the original array


// slice example
// originalArray:  [ 'google', 'youtube', 'chatgpt', 'audi' ]
// originalArray.slice(1,3);
// output of above line [ 'youtube', 'chatgpt' ]
// original array:  [ 'google', 'youtube', 'chatgpt', 'audi' ] // nothing changed in original array

// splice example
// originalArray:  [ 'google', 'youtube', 'chatgpt', 'audi' ]
// originalArray.splice(1,3);
// output of above line [ 'youtube', 'chatgpt','audi' ]
// original array:  [ 'google' ] // it has manipulated the original array i.e. extracted the mentioned range of element from original array



