const input = require('fs').readFileSync(0).toString().trim().split(' ');
const [K, N, M] = input.map(Number);
const total = K * N;
console.log(Math.max(0, total - M));