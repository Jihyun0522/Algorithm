const input = require('fs').readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

if (n === 0) {
    console.log(0);
    process.exit();
}

const scores = [];
for (let i = 1; i <= n; i++) {
    scores.push(Number(input[i]));
}
scores.sort((a, b) => a - b);

const cut = Math.round(n * 0.15);

let sum = 0;
for (let i = cut; i < n - cut; i++) {
    sum += scores[i];
}

const count = n - (2 * cut);
const average = Math.round(sum / count);

console.log(average);