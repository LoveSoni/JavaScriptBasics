'use strict';

let myArray = [1, 2, 3, 4, 5];

let intialArray = 0;

let output = myArray.reduce((accumalator, currentvalue) => { console.log("accumlator current value is: " + accumalator); return accumalator + currentvalue }
    , intialArray);

// steps
//1. in first iteration initial array ie. 0 will be assigned to accumoator
//2. then accumalator + current value i.e. 0 +1 = 1
//3. in second iteration output of 2nd step is passed to accumalator i.e. 1
// repeat step 2 and 3 till last iteration
console.log(output);


const shoppingCart = [{
    item: "js",
    price: "2999"
},
{
    item: "python",
    price: "999"
},
{
    item: "data science",
    price: "12999"
},
{
    item: "mobile dev",
    price: "5999"
},
]

// now add items of shopping cart

let cartTotal = shoppingCart.reduce((accumalator, cartItem) => {
    return accumalator + Number(cartItem['price']);
}, 0);

console.log(cartTotal);