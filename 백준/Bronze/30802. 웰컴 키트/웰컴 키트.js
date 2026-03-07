const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const sizes = input[1].split(' ').map(Number);
const [T, P] = input[2].split(' ').map(Number);

let totalTshirtsBundles = 0;
for (let s of sizes) {
    totalTshirtsBundles += Math.floor((s + T - 1) / T);
}

console.log(totalTshirtsBundles);
console.log(Math.floor(N / P) + " " + (N % P));