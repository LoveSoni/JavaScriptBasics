'use strict';
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    logMe() {
        console.log('username is :' + this.username + " and password is :" + this.password);
    }


    // to stop access of this method outside the class
    // it will not be accessible also to child class
    static createId() {
        return `123`;
    }
}


const love = new User('love', 'mypass');
love.logMe();
console.log(love.createId());
