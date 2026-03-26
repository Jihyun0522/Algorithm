const [N, M] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(Math.min(Math.floor(N / 2), Math.floor(M / 2)));