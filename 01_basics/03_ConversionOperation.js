'use strict'

let score = "33";
console.log(typeof (score));

// 1. Convert string to number
let scoreInNumber = Number(score);
console.log(scoreInNumber);
console.log(typeof scoreInNumber)

// Note: but the problem is if there are few alphabets attached with number
// then it would return NaN, in java it used to number format exception
// e.g. 
score = "33a";
scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);




// 2. Convert number to string
let scoreInt = 45;
let scoreInString = String(scoreInt);
console.log(scoreInString);
console.log(typeof scoreInString);


// Note:
/*
    "33" -> 33
    "33abc" -> NaN
    true -> 1
    false -> 0
    null -> 0
    undefined -> NaN
*/

// 3. convert number to boolean
let isLoggedIn = 0;
let logInORNot = Boolean(isLoggedIn);
console.log(typeof logInORNot);
console.log(logInORNot);
/*
    1 -> true
    0 -> false
    NaN -> false
    undefined -> false
    null -> false
    "" -> false
    "love" -> true
*/


/* Operations */
let value = 3;
let negValue = -value
console.log(negValue);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 4);

let str1 = "love";
let str2 = " soni"
let str3 = str1 + str2;
let str4 = str1 - str2;
console.log(str1 + str2);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log(true);  //true
console.log(+true); // 1
console.log(+false); //0
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.table([num1, num2, num3]);

let gameCounter = 100;
gameCounter++;
++gameCounter;
console.log(gameCounter);

