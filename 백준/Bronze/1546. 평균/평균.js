const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const scores = input[1].split(' ').map(Number);
const sum = scores.reduce((acc, cur) => acc + cur, 0);

console.log((sum * 100) / (Math.max(...scores) * N));