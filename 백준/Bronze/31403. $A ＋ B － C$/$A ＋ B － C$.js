const input = require('fs').readFileSync(0).toString().trim().split('\n');

const A = input[0];
const B = input[1];
const C = input[2];

console.log(Number(A) + Number(B) - Number(C));
console.log((A + B) - C);