const input = require('fs').readFileSync(0).toString().split('\n');

const T = parseInt(input[0]);
let result = "";

for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    
    result += `Case #${i}: ${A} + ${B} = ${A + B}\n`;
}

process.stdout.write(result);