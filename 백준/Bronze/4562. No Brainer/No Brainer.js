const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(input.shift());
const results = [];

for (let line of input) {
    const [X, Y] = line.split(' ').map(Number);
    results.push(X >= Y  ? "MMM BRAINS" : "NO BRAINS");
}

console.log(results.join('\n'));