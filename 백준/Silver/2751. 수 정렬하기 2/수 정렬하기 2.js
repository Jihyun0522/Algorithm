const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();
const numbers = input.map(Number);
numbers.sort((a, b) => a - b);

console.log(numbers.join('\n'));