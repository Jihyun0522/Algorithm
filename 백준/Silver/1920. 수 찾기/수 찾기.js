const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

const N = Number(input[0]);
const targetSet = new Set(input.slice(1, N + 1));

const M = Number(input[N + 1]);
const queryNumbers = input.slice(N + 2);

const result = [];
for (let num of queryNumbers) {
    if (targetSet.has(num)) {
        result.push(1);
    } else {
        result.push(0);
    }
}

console.log(result.join('\n'));