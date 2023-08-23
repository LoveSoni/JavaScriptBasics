const user = {
    username: "love",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} Welcome to my web`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
console.log(this); // if we run this in browser we'll get the window context, since we are using node engine it will return blank object



function one() {
    let username = "love"
    console.log(this.username); // this will return undefined since this can only be used with object
}
one();

// define function using arrow function

const myFunction = () => {
    console.log("hey this is me");
}
myFunction();

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2, 4));

// implicit return : if we have only one line of statement then we don't need to specify the return keyword
// also we use paranthesis and there also we don't need to return anything
const addThree = (num1, num2, num3) => (
    num1 + num2 + num3
)

console.log(addThree(3, 4, 5));

// Important: return an object from a function
const returnMyUser = () => {
    return { username: "love" };
}

console.log(returnMyUser());
// but then try to return an object from implicit return function
// const returnAnotherUser = () => { username: "love" };// it will return undefined, so we have to enclose this inside paranthesis
const returnAnotherUser = () => ({ username: "samk" });
console.log(returnAnotherUser());

