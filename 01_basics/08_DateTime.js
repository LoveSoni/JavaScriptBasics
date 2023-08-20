'use strict';


// dates
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDateTwo = new Date(2023, 0, 23, 5, 3);
let myCreatedDateThird = new Date("2023-01-14");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDateTwo.toLocaleString());
console.log(myCreatedDateThird.toDateString());

// date in mm dd yy format
let myCreateDateFour = new Date("08-20-2023");
console.log(myCreateDateFour.toDateString());

// time stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDateFour.getTime());


// get time in seconds
console.log(Math.floor(Date.now() / 1000));


let newDate1 = new Date();
// get month
console.log(newDate1.getDate());
console.log(newDate1.getMonth());
console.log(newDate1.getHours());


console.log(newDate1.toLocaleString('default', {
    weekday: "long",
    timeZone: ""
}));