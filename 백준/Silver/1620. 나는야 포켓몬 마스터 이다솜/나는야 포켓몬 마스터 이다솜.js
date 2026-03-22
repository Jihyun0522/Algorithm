const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const nameToNum = new Map();
const numToName = new Map();

for (let i = 1; i <= N; i++) {
    let name = input[i];
    nameToNum.set(name, i);
    numToName.set(i, name);
}

const result = [];
for (let i = N + 1; i <= N + M; i++) {
    let query = input[i];
    
    if (isNaN(Number(query))) {
        result.push(nameToNum.get(query));
    } else {
        result.push(numToName.get(Number(query)));
    }
}

console.log(result.join('\n'));