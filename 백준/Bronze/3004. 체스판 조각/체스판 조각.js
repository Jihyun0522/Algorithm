const N = Number(require('fs').readFileSync(0).toString().trim());
console.log((Math.floor(N / 2) + 1) * (N - Math.floor(N / 2) + 1));