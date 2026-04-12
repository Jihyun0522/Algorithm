const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const basket = Array.from({length: N + 1}, (_, i) => i);

for (let m = 0; m < M; m++) {
    const [i, j] = input.shift().split(' ').map(Number);
    const temp = basket[i];
    basket[i] = basket[j];
    basket[j] = temp;
}

console.log(basket.slice(1).join(' '));