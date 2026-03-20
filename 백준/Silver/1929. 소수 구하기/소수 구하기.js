const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);

const M = Number(input[0]);
const N = Number(input[1]);

const prime = new Array(N + 1).fill(true);
prime[0] = prime[1] = false;

let result = [];
for (let i = 2; i < Number(N ** 0.5) + 1; i++) {
    if (prime[i]) {
        for (let j = i * i; j < N + 1; j += i) {
            prime[j] = false;
        }
    }
}

for (let i = M; i < N + 1; i++) {
    if (prime[i]) {
        result.push(i);
    }
}

console.log(result.join('\n'));