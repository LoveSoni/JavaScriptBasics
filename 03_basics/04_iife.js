'use strict'

// immediately invoked function expression: where we don't need to explicitly call that function to invoke it
// to solve the pollution of global scope

function normalFunction() {
    console.log("normal function");
}
normalFunction();

// normal function with iife
// this is called named iife
(function normalFunctionIIfe() {
    console.log("normal function IIfe");
})();

console.log("+++++++++++++++++++++++++++")
// variable function
var variableFunction = function () {
    console.log("variable function")
}
variableFunction();

// variable function with IIFE
(variableFunction = function () {
    console.log("variable function IIFE")
})();


console.log("+++++++++++++++++++++++++++");
// arrow function(implicit return with paranthess) with iife examples
// this is called named iife
(() => (console.log("arrow function IIFE paranthesis")))();

// arrow function(Explicit return with curly braces) with iife examples
(() => { console.log("arrow function IIFE curly braces") })();

// pass argument through IIFE
((username) => { console.log(`welcome back ${username}`) })("love");


// note: if you are defining two iife at a time, then make sure to add a semicolumn after first one
// otherwise second will result in error