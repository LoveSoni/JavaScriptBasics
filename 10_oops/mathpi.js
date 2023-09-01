'use strict';


console.log(Math.PI);

// check the math.pi property value and why it is not changeable
const prop = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(prop);



// const myNewObject = Object.create(null);// by default value is also null

const user = {
    username: "love",
    password: 'its shivaji!! cool'
}

console.log(user);
// now if i want to change property of user variable i can do that
user.password = 'its shivaji!! cooooooooool';
console.log(user.password);

// check descriptor property of my own object
// ownPropertyDescriptors to print all property
console.log(Object.getOwnPropertyDescriptors(user));

// how to change the property of my class
Object.defineProperty(user, 'password', {
    writable: false,
    enumerable: true,
    configurable: true
})
// copied writable, enumarable, configuralbe from the getOwnPropertyDescriptors output
console.log(Object.getOwnPropertyDescriptors(user));

// now try to change the value
// user.password = 'password hacked';// it will give error
console.log(user.password);


// enum on object

const elephant = {
    name: 'Raju',
    age: '12',
}
console.log(elephant);
// for (const [key,value] of elephant) {
//     console.log(element);
// }

// it will return error as element is not iterable
// but we can make object iterable
for (const [key, value] of Object.entries(elephant)) {
    if (typeof value != 'function') {
        console.log(`${key}  ${value}`);
    }
    // above condition will only include properties not methods

}