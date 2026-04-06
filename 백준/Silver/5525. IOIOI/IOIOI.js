const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());
const M = Number(input.shift());
const S = input[0];

let cnt = 0;
let count = 0;
let i = 0;

while (i < M - 2) {
    if (S.slice(i, i+3) === 'IOI') {
        cnt++;
        if (cnt === N) {
            count++;
            cnt--;
        }
        i += 2;
    } else {
        cnt = 0;
        i++;
    }
}

console.log(count);