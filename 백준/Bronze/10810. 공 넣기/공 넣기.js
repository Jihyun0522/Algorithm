const input = require('fs').readFileSync(0).toString().trim().split('\n');
let idx = 0;
const [N, M] = input[idx++].split(' ').map(Number);
const basket = new Array(N + 1).fill(0);

for (let m = 0; m < M; m++) {
    const [start, end, num] = input[idx++].split(' ').map(Number);
    for (let i = start; i <= end; i++) {
        basket[i] = num;
    }
}

console.log(basket.slice(1).join(' '));