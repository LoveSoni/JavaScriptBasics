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
