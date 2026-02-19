const input = require('fs').readFileSync(0).toString().trim().split('\n');

const X = parseInt(input[0]);
const N = parseInt(input[1]);

let total = 0;

for (let i = 2; i < 2 + N; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    total += a * b;
}

console.log(total === X ? "Yes" : "No");