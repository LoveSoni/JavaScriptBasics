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



function addToCart(...num1) { // rest operator can take any number of arguments
    return num1;
}

console.log(addToCart(100, 200, 300));

// pass object to function
const user = {
    username: "love",
    email: "love.love@test.com"
}

function handleCustomObject(customObject) {
    console.log(`username is ${customObject.username} and email is ${customObject.email}`)
}

handleCustomObject(user);
handleCustomObject({ user: "peter", email: "peter@google.com" });

// pass array to function

const array1 = [2, 3, 4, 5];
function count(numberArray) {
    return numberArray[2];
}

console.log(count(array1));