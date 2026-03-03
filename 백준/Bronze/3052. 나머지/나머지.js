const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

let remainders = [];
for (let num of input) {
    remainders.push(num % 42);
}

console.log(new Set(remainders).size);