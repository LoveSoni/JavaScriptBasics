'use strict'

// for loop
// print 1 to 10
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("hey are you searchin 5??")
    }
    console.log(index);
}




for (let i = 2; i <= 5; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i}*${j} = ${i * j}`);
    }
}

// loop on array
const myArray = ['flash', 'batman', 'superman'];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
// in java we'll get not array index out of bound exception, it would return "undefined"


// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("found 5");
        break;
    }
    console.log(i);
}



for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("found 5");
        continue;
    }
    console.log(i);
}