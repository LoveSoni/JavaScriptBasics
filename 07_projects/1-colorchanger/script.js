const buttons = document.querySelectorAll('.button');
// console.log(button);

const body = document.body;
// console.log(body);

buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
        console.log(event);
        const selectedColor = event.target.id;
        switch (selectedColor) {
            case 'grey':
                body.style.backgroundColor = selectedColor;
                break;
            case 'white':
                body.style.backgroundColor = selectedColor;
                break;
            case 'blue':
                body.style.backgroundColor = selectedColor;
                break;
            case 'yellow':
                body.style.backgroundColor = selectedColor;
                break;
            default:
                console.log('invalid button');
        }
    })
})

