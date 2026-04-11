const N = Number(require('fs').readFileSync(0).toString().trim());
const a = Math.floor((1 + N) * N / 2);
console.log((a * 3 + N + 1) % 45678);