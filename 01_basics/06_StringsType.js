'use strict';
let name = "love";

const repoCount = 10;

// console.log(name + repoCount);
console.log(`name is ${name} and \n my repo count is ${repoCount}`)

// another declare to string
const favApp = new String('ola/uber');
console.log(favApp);
console.log(favApp[0]);
console.log(favApp.length);
console.log(favApp.__proto__);

console.log(favApp.toUpperCase());
console.log(favApp.charAt(4));
console.log(favApp.indexOf('u'));
const splitValues = favApp.split('/');
console.log(splitValues[0]);
console.log(splitValues[1]);

console.log(favApp.substring(0, 3));

const anotherString = favApp.slice(-2, 3);
// console.log(anotherString);

const newString1 = "   love   ";
console.log(newString1.trim());

const url = "https://google.com/love%20soni";
console.log(url.replace("%20", " "));
console.log(url.includes("gogle"));