'use strict';

const myMap = new Map();
myMap.set("in", "india");
myMap.set("usa", "united states of America");
myMap.set("fr", "france");

// iterate map using forof loop
for (const [key, value] of myMap) {
    console.log(key + "\t" + value);
}


// iterate map using for in loop

// for (const key in myMap) {
//     console.log(key);
// }

// note: it will not work as map is not iterable


