'use strict';
console.log(2 >= 2); // true
console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(1 > 2);  //false
console.log(1 != 2); // true
console.log(1 != 1); //false
console.log(2 < 2); //false

console.log("2" > 1);// true
console.log("02" > 1); //true
console.log("2a" > 1); //false


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// note: here = operator works differently then > and ==
// = operator converts null to 0 thats why we got true 

// === strict check: it check value as well as data type
console.log(2 === '2'); //false


