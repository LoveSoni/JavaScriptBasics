'use strict'

const marvelHeroes = ['iroman', 'thor', 'spinderman'];
const dcHeroes = ['superman', 'flash', 'batman'];

// push : push will copy the array inside first array
// marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);
console.log(dcHeroes);
// console.log(marvelHeroes[3][1]);

// concat: it will copy the array value and it will return a new array
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);


// spread operator
const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allNewHeroes);
console.log(typeof allHeroes);


// flat method : if we have multiple array inside a array then we can flat it
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usableArray = anotherArray.flat(Infinity);
console.log(anotherArray);
console.log(usableArray);

// check if it is array or not
const isArrayOrNot = Array.isArray(["love"]);
console.log(isArrayOrNot);

// conver to array
const arrayFind = Array.from("love");
console.log(arrayFind);
// but if we try to convert object to array then by default it will return empty array, we'll have to explicitly define whehter it should create array using its key or type e.g. console.log(Array.from({name: "love"})) // returns []





