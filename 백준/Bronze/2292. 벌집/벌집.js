const input = require('fs').readFileSync(0).toString().trim();
const N = Number(input);

let count = 1;
let lastNum = 1;

while (N > lastNum) {
    lastNum += 6 * count;
    count += 1;
}

console.log(count);