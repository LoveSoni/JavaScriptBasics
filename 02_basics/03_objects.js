// singleton : whenever we create object with a constructor then it is called singleton i.e. object.create
// literals: without constructor it is called object literals

// object literals
const user = {
    name: "love",
    "full name": "love love",
    age: 34,
    location: "Aus",
    email: "love@google.com",
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Saturday']
}

console.log(user);
console.log(user.name);
console.log(user['name']);
console.log(user["full name"]);
console.log(user.age);


// Question: Create a symbol add in to array and print it
const mySymbol = Symbol("mykey");
const newObject = {
    // mySymbol: "hi" this is not the way to define the symbol in the object
    [mySymbol]: 'hey'
}

console.log(newObject);
console.log(newObject[mySymbol]);

// change value in array
user.email = 'love.love@test.com';
console.log(user.email);

// make object value as final : it will not give any error but value will not be changed in the object
// Object.freeze(user);
user.email = 'hack@email';
console.log(user.email); // it will not be changed: output : love.love@test.com


// add a function to the object
user.greetings = function myFunction() {
    console.log('hi my name is love');
}

console.log(user.greetings); // it will return function[returnback]
console.log(user.greetings()); // it will say greetings not a function which means an error
// now how to make greetings a function

user.greetingsTow = function myFunction() {
    console.log(`hello js user ${this["full name"]}`);
}
console.log(user.greetingsTow());