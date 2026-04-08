const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const A = BigInt(input.shift());
const B = BigInt(input.shift());
const result = A * B;
console.log(result.toString());