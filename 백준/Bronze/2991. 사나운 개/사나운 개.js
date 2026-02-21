const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [A, B, C, D] = input[0].split(' ').map(Number);
const deliveryTimes = input[1].split(' ').map(Number);

function isAttacked(time, attack, rest) {
    const period = attack + rest;
    const status = (time - 1) % period;
    return status < attack ? 1 : 0;
}

deliveryTimes.forEach(time => {
    let count = 0;
    count += isAttacked(time, A, B);
    count += isAttacked(time, C, D);
    console.log(count);
});