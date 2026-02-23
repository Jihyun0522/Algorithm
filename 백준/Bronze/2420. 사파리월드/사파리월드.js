const input = require('fs').readFileSync(0).toString().trim().split(' ');

const N = parseInt(input[0]);
const M = parseInt(input[1]);

console.log(Math.abs(N - M));