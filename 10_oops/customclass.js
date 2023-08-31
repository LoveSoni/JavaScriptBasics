'use strict';
class User {
    // constructor

    constructor(username, email, pass) {
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

    encryptPassword() {
        return `${this.pass}random`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const love = new User('love', 'love.love@gmail.com', 'passss');
console.log(love);
console.log(love.encryptPassword());
console.log(love.changeUsername());


console.log('Behind the sceneeeeeee');
// behind the scene
function userFunction(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

userFunction.prototype.encryptPassword = function () {
    return `${this.password}ab`;
}
userFunction.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
}

const sam = new userFunction('sam', 'ingwell@gmail', 'sam222');
console.log(sam);
console.log(sam.encryptPassword());
console.log(sam.changeUsername());