const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
const results = [];

for (let i = 0; i < T; i++) {
    let n = parseInt(input[i + 1]);
    let a = 1;
    let b = 0;
    
    for (let j = 0; j < n; j++) {
        let sum = a + b;
        a = b;
        b = sum;
    }
    results.push(`${a} ${b}`);
}

console.log(results.join('\n'));