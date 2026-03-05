const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < N; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(min + ' ' + max);