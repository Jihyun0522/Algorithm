const input = require('fs').readFileSync(0).toString().trim();
const N = Number(input);
let result = 1;

for (let i = 1; i <= N; i++) {
    result *= i;
}

console.log(result);