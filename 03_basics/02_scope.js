'use strict'
var c = 20;

if (true) {
    // let a = 10;
    // const b = 20;
    var c = 30;
}
// console.log(a);
// console.log(b);
console.log(c);

// var has the problem of scoping 
// here if you see we've a global var c which is 20 but that was changed in the if block so will get the updated value ie. 30