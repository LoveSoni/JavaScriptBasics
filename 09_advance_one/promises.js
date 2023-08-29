const promise1 = new Promise((resolve, reject) => {
    // do an async task
    // db calls, cryptography, network calls
    setTimeout(() => {
        console.log('async task complete');
        resolve();
    }, 1000);
});

promise1.then(function () {
    console.log('promise consumed')
})
// or we can simply the above syntac
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('async wait 2');
        resolve();
    }, 1000);
}).then(function () {
    console.log('promise consumed 2');
})


// passing data to resolver
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const msg = { user: 'love', email: 'love.love' }
        resolve(msg);
    }, 1000);
})

promise3.then(function (msg) {
    console.log(msg);
});



// promise  on based on error
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'love' });
        }
        else {
            reject('Error: something went wrong');
        }
    }, 1000);
})

promise4.then(function (user) {
    console.log(user);
    return user['username'];
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
})
