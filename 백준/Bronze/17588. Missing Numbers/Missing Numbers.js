const input = require('fs').readFileSync(0).toString().trim().split('\n');
const n = Number(input.shift());
const numbers = input.map(Number);

const numSet = new Set(numbers);
const last = numbers[numbers.length - 1];

const missing = [];
for (let num = 1; num < last + 1; num++)  {
    if (!numSet.has(num)) {
        missing.push(num);
    }
}

if (missing.length > 0) {
    console.log(missing.join('\n'));
} else {
    console.log('good job');
}