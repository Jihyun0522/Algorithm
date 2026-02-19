const input = require('fs').readFileSync(0).toString().split('\n');

const T = parseInt(input[0]);
const results = [];

for (let i = 1; i <= T; i++) {
    if (!input[i]) {
        break;
    }
    
    const [A, B] = input[i].split(' ').map(Number);
    results.push(A + B);
}

console.log(results.join('\n'));