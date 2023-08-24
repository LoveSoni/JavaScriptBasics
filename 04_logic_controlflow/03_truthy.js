'use strict';
const userEmail = 123;
// const userEmail = "" // if we would have passed empty string, then it will not be a truty value


if (userEmail) { // here javascript assumes userEmail string as true/ truthy value
    console.log("got user email");
}
else { console.log("don't have user email") }


const user = [];
if (user) { // user is a truthy value
    console.log("hey");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty")
}


// Nullish coalescing operator (??): null undefined
let value = 5 ?? 10;   // if value is null or undefined then we'll return the second value

let valu2 = null ?? 10; /// return 10
let value3 = undefined ?? 10; // return undefined

console.log(value);
console.log(valu2);
console.log(value3);

let value4 = null ?? 10 ?? 10;
console.log(value4); // 10;

// ternay operator (? : ): if else alternative
// condition ? true : false

const age = 18;
let res = age > 18 ? "eligible" : 0;
console.log(res);