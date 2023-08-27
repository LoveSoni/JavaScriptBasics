const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#heightInput').value);
// const weight = parseInt(document.querySelector('#weightinput').value);
// we should not store this values as well, because when the script will be loaded
// these values will be blank
form.addEventListener('submit', (event) => {
    event.preventDefault(); // hold the form submit event
    const height = parseInt(document.querySelector('#heightInput').value);
    const weight = parseInt(document.querySelector('#weightinput').value);
    const result = document.querySelector('#results');
    if (height === '' || isNaN(height) || height < 0) {
        result.innerText = (`please give a valid height ${height}`);
    }
    else if (weight === '' || isNaN(weight) || weight < 0) {
        result.innerText = (`please give a valid weight ${weight}`);
    }
    else {
        const output = (weight / ((height * weight) / 10000)).toFixed(2);
        result.appendChild(document.createTextNode(output));
    }

})
