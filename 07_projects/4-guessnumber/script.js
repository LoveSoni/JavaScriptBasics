const randomNumber = parseInt((Math.random() * 100) + 1);
console.log('Random number', randomNumber);

const submit = document.querySelector('#submitButton');
const enterNumber = document.querySelector('#enterNumber');
const resultSection = document.querySelector('.result');
const userGuess = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".remaining");
const lowOrHigh = document.querySelector('.lororhigh');

let prevGuess = [];

let numberGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const enteredValue = parseInt(enterNumber.value);
        console.log("Entered value is :" + enteredValue);
        validateGuess(enteredValue);

    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    }
    else {
        prevGuess.push(guess);
        if (numberGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess == randomNumber) {
        displayMessage(`You guessed it right`)
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) {
    enterNumber.value = '';
    userGuess.innerHTML += `${guess} `;
    numberGuess++;
    remainingGuess.innerHTML = `${11 - numberGuess}`;
}

function displayMessage(msg) {
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`;

}

function newGame() {

}

function endGame() {


}
// submit.addEventListener('click', (event) => {
//     console.log('inside block');
//     console.log(guessForm);

//     // event.defaultPrevented();
//     const enteredNumber = document.querySelector('#enterNumber');
//     console.log(enteredNumber.value);
// })