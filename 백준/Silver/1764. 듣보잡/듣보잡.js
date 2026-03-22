const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const knownSet = new Set();
const unknownSet = new Set();

for (let i = 1; i <= N; i++) {
    knownSet.add(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
    unknownSet.add(input[i]);
}

const result = [...knownSet].filter(name => unknownSet.has(name));
result.sort();

console.log(result.length);
console.log(result.join('\n'));