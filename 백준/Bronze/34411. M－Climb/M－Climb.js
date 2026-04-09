const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = BigInt(input[0]);
const m = BigInt(input[1]);
console.log((n * m).toString());