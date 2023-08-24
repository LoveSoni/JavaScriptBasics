'use strict';

const myMap = new Map();
myMap.set("in", "india");
myMap.set("usa", "united states of America");
myMap.set("fr", "france");

for (const [key, value] of myMap) {
    console.log(key + "\t" + value);
}