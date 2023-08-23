'use strict'
const isUserLoggedIn = true;

if (isUserLoggedIn) {

}

//comparison: >, >=, <, <=, ==, !, ===
if (2 === "2") {
    console.log("executed")
}

const temp = 51;
if (temp < 50) {
    console.log("less than 50");
} else {
    console.log("greater than 50");
}

const score = 200;
if (score > 100) {
    const power = "fly";
    console.log(`user power is ${power}`);
}
// console.log(`user power is ${power}`);


const balance = 1000;
if (balance > 500) console.log("greater than 500");

// if else if nesting
if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900) {
    console.log("less than 900");
}

else {
    console.log("less than 1200")
}

// multiple conditions
const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
    console.log("allowed to purchase course");
}

const loogedInFromGoogle = false;
const loggedInFromFacebook = true;
if (loggedInFromFacebook || loogedInFromGoogle) {
    console.log("you are allowed to login")
}