const [T, S] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

if ((T >= 12 && T <= 16) && S === 0) {
    console.log(320);
} else {
    console.log(280);
}