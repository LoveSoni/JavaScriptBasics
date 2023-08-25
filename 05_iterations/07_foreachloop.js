'use strict';


const myArray = ['java', 'c', 'c++', 'swift'];


myArray.forEach(x => console.log(x));
//OR using function
myArray.forEach(function (x) { console.log(x) });


// now use predefined function in the foreach
function printMe(item) {
    console.log(item);
}
myArray.forEach(printMe);

console.log("++++++++++++");

myArray.forEach((item, index, arrayList) => console.log(item + " : " + index + " : " + arrayList));

console.log("++++++++++++");
// Iterate on array of objects
const arrayObjet = [
    {
        langName: "javascript",
        filaname: "js"
    },
    {
        langName: "java",
        filaname: "java"
    },
    {
        langName: "python",
        filaname: "py"
    }
]

arrayObjet.forEach(obj => {
    console.log(obj);
})