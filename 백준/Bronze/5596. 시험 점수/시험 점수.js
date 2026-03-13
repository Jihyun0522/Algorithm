const input = require('fs').readFileSync(0).toString().trim().split('\n');

const S = input[0].split(' ').map(Number).reduce((a, b) => a + b);
const T = input[1].split(' ').map(Number).reduce((a, b) => a + b);

console.log(Math.max(S, T));