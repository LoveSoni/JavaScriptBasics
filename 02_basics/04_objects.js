'use strict';
// singleton object declaration vs non single ton object declaration
// singleton object will be declarte using object class
const myUser = new Object();
console.log(myUser);
// non singleton object which is declared using {} curly braces
const myUser1 = new Object();
console.log(myUser1);

myUser1.id = "1ab";
myUser1.name = "sam";
myUser1.isLoggedIn = false;
console.log(myUser1);

// declare object inside one object
const regularUser = {
    email: "love.love@test.com",
    fullName: {
        userFullName: {
            firstName: "love",
            lastName: "soni"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName.userFullName.firstName);

// merge two arrays
const object1 = {
    1: "a",
    2: "b"
}
const object2 = {
    3: "a",
    4: "b"
}

// const object3 = {object1, object2} // but it will not merge two arrays,
// using object assign method we can merge two arrays
let object3 = Object.assign(object1, object2);
console.log(object3);
//OR using spread operator
object3 = { ...object1, ...object2 };
console.log(object3);


// match reference of two objects
console.log(object1 == object3);

// how to declare array of objects
const dbUsers = [
    {
        id: 1,
        name: "loe",
        email: "loe.ubs.com"
    },
    {
        id: 2,
        name: "love",
        email: "love.ubs.com"
    }
]

console.log(dbUsers[1]["id"]);
console.log(dbUsers[1].name);

// print all keys/values of a object and it returns an array
console.log(Object.keys(object1));
console.log(Object.values(object1));

console.log(Object.entries(object1));


// check of object has some key or not
console.log(object3.hasOwnProperty("id"));