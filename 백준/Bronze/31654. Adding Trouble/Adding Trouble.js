const input = require('fs').readFileSync(0).toString().trim().split(' ');
const A = BigInt(input[0]);
const B = BigInt(input[1]);
const C = BigInt(input[2]);

console.log(A + B === C ? 'correct!' : 'wrong!');