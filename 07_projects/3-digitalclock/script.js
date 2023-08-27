const timeDiv = document.querySelector('#time');
console.log(timeDiv);

// const currentTime = dateAndTime.getHours() + ":" + dateAndTime.getMinutes() + ":" + dateAndTime.getSeconds();


setInterval(() => {
    const dateAndTime = new Date();
    const time = dateAndTime.toLocaleTimeString();
    console.log(time);
    timeDiv.textContent = time;
}, 1000);

