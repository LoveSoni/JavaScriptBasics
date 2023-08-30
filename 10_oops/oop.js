// Object literal
const user = {
    username: 'love',
    email: 'love.love@gmail.com',
    loggedInCount: 5,

    getUserDetailsFromDb: function () {
        return this.username;
    }
}




console.log(user.loggedInCount);
console.log(user['username']);
console.log(user.getUserDetailsFromDb());


// use new keyword: to acheive constructor function
function myUser(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    // return this; // it is implicitly defined with constructor function
}

const user1 = myUser('love', 'love', 'love.love@gmail.com');
// her if we will call this function and pass the values
// then existing values will be overrriden
const user2 = myUser('sam', 'sam', 'sam.sam@gmail.com');
console.log(user1);

// to solve this problem we can use contructor function
const myUser1 = new myUser('love', 'love', 'love.love@gmail.com');
const myUser2 = new myUser('sam', 'sam', 'sam.sam@gmail.com');
console.log(myUser1);
console.log(myUser2);


//new keyword
// 1) create a empty object which is called instance
// 2) constructor function is called using new keyword
// 3) values gets injected to this keyword
// 4) this keywords gets returned