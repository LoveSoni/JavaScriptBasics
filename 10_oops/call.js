// 'use strict'

function setUsername(username) {
    // db calls
    this.username = username;
}

// explicitly call another functin and set variable for own
// we'll have to pass this to another function
// and then another function will understand i need to use the calling function this 
function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;

}

const myUser = new createUser('love', 'love.love@gmail.com', 'password');
console.log(myUser);