const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);
const T = Number(input[0]);
let results = [];

for (let i = 1; i <= T; i++) {
    const N = BigInt(input[i]);
    results.push((N * N).toString());
}

console.log(results.join('\n'));