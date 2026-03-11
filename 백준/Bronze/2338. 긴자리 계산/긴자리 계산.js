const input = require('fs').readFileSync(0).toString().trim().split(/\s+/).map(BigInt);
const A = input[0];
const B = input[1];

console.log((A + B).toString());
console.log((A - B).toString());
console.log((A * B).toString());