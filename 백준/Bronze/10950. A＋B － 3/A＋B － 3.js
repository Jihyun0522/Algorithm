const input = require('fs').readFileSync(0).toString().trim().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const pair = input[i].split(' ');
    const A = parseInt(pair[0]);
    const B = parseInt(pair[1]);
    
    console.log(A + B);
}