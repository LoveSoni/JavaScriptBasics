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

//nested scope
function one() {
    const username = "love";
    function two() {
        const website = "youtube";
        console.log(username);

    }
    // console.log(website); // exception website not defined
    two();
}

one();
// note: child function can use parent function variables, but parent function can't access child function variables

if (true) {
    const username = "love";
    if (username === "love") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website); // exception website not defined

}

// console.log(username); exception username not defined

// ++++++++++++Interesting++++
function addOne(number) {
    return number + 1;
}
addOne(5);

// in this example we can call the function before its declaration

// or we can define function in following ways
const plusTwoNumber = function (number) {
    return number + 2;
}

console.log(plusTwoNumber(4));

// in this type of declaration wecan't call function before its declaration