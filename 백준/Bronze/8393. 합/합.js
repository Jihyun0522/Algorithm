const input = require('fs').readFileSync(0).toString().trim();
const n = parseInt(input);

let total = 0;

for (let i = 1; i <= n; i++) {
    total += i;
}

console.log(total);