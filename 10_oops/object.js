'use strict'
function sum(num1, num2) {
    return num1 + num2;
}

sum.num = 34;
// function could have object like behaviour
// js supports prototypal inheritance
console.log(sum(1, 2));
console.log(sum.num);
console.log(sum.prototype);

function createUser(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

}