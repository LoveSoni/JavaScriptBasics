'use strict';

let myName = new String('love    ');
console.log(myName.length);
// here the length is 8 because it will also includes white space
// but i want a true lenght property


// myName.prototype.findTrueLength = 'hi'
// note:This example also shows how to bakedin cutom properties in the prototype

Object.prototype.trueLength = function () {
    return 'true length is ' + this.trim().length;
}
console.log(myName.trueLength());



// Adding method to Object prototype
const companies = ['apple', 'samsung'];

let rating = {
    apple: 5,
    samsung: 3,

    getAppleRating: function () {
        console.log(`Apple rating is : ${this.apple}`);
    }
}

Object.prototype.love = function () {
    console.log('its me love ');
}
// if we would add this prototye in the array, then it will not automatially pass to function and other objects
// so its better to add this in the Object prototype

rating.love();

companies.love();