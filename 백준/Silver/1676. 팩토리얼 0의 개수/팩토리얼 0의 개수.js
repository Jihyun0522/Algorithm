const N = Number(require('fs').readFileSync(0).toString().trim());
const count = Math.floor(N / 5) + Math.floor(N / 25) + Math.floor(N / 125);

console.log(count);