const input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input.shift());

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

for (let i = 0; i < T; i++) {
    const N = Number(input[i]);
    if (N >= 5) {
        console.log(0);
    } else {
        console.log(factorial(N) % 10);
    }
}