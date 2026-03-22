const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const times = input[1].split(' ').map(Number);
times.sort((a, b) => a - b);

let total = 0;
let current = 0;
for (let p of times) {
    current += p;
    total += current;
}
console.log(total);