const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const sum = input.reduce((acc, cur) => acc + (cur ** 2), 0);
console.log(sum % 10);