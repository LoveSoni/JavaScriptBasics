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



console.log('Adding our own method to function prototype');
console.log('***********************************************')


function createNewUser(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

createNewUser.prototype.getRandomPassword = function () {
    this.password = parseInt(Math.random() * 100);
    return this;
}

const user1 = new createNewUser('love', 'lovel');
const user2 = new createNewUser('sam', 'ingwel');
console.log(createNewUser.prototype);

console.log(user1.getRandomPassword());


