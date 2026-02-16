const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A * (B % 10));
console.log(A * Math.floor((B % 100) / 10));
console.log(A * Math.floor(B / 100));
console.log(A * B);