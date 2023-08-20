var { exec, spawn } = require('child_process');

exec('adb devices', function (err, stdout, stderr) {
    if (err) console.log(stderr);
    console.log(stdout);
})