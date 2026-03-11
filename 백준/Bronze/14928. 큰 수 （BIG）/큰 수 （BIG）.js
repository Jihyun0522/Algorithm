const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);
const N = BigInt(input[0]);
const mod = 20000303n;

console.log((N % mod).toString());