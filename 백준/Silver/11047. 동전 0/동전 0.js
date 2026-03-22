const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, K_init] = input[0].split(' ').map(Number);
let K = K_init;
const coins = input.slice(1).map(Number);
let count = 0;

for (let i = coins.length - 1; i >= 0; i--) {
    count += Math.floor(K / coins[i]);
    K %= coins[i];
    
    if (K === 0) {
        break;
    }
}

console.log(count);