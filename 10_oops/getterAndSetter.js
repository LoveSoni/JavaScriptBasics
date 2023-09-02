'use strict'
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // it will be automatically invoked
    // as we already have name and email property defined in the constructor
    // it would result in call stack size exceedd error
    // so in our getter and setter we can define new property by usint this._
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }


}

const love = new Student('love', 'love.love@gmail.com');

console.log(love.name);
console.log(love.email);