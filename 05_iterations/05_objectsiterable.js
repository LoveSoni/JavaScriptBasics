'use strict';

const myObject = {
    del: "delhi",
    rtk: "rohtak",
    pun: "pune"
}

// Now how to iterate object
// using forin loop
for (const key in myObject) {
    console.log(key)
    // and print value
    console.log(myObject[key]);
}

// it will not work on object as it is not iterable

// const myObject = {
//     game1: "nfs",
//     game2: "pubg"
// }

// for (const game of myObject) {
//     console.log(game);
// }