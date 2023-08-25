'use strict';
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// add 10 to all items in nums array
const myNewNums = nums.map(n => {
    return n + 10;
})
console.log(myNewNums);


console.log("*****************chaining***************")
// chaining
const newNums = nums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
console.log(newNums);
