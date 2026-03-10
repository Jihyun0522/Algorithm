const input = require('fs').readFileSync(0).toString().trim().split(/\s+/).map(Number);
const N = input[0];
const K = input[1];

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

const ans = factorial(N) / (factorial(K) * factorial(N - K));
console.log(Math.round(ans));