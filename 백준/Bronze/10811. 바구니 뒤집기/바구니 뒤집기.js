const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const basket = Array.from({length: N}, (_, i) => i + 1);  // [1, 2, ..., N]

for (let m = 0; m < M; m++) {
    const [i, j] = input.shift().split(' ').map(Number);
    const reversed = basket.slice(i-1, j).reverse();
    basket.splice(i-1, j-i+1, ...reversed);
}

console.log(basket.join(' '));