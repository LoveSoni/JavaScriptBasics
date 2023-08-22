'use strict'

function echoMyName() {
    console.log('love');
}

echoMyName();


function sum(num1, num2) { // this is called parameters
    return num1 + num2;
}

console.log(sum(2, 4)); // this is called arguments


function logInUserMessage(username = "noname") { // we can also define default value (username="sam")
    if (username === undefined) {  // or if(!username)
        console.log('please enter valid username');
        return
    }
    return `${username} just loggedin`;
}
console.log(logInUserMessage('love'));
// lets say if we don't have passed anything in the function
console.log(logInUserMessage());// thn we'll get "undefined just loggedin"