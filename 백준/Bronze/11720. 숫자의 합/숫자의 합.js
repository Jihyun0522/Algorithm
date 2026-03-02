const input = require('fs').readFileSync(0).toString().trim().split('\n');
const numbers = input[1].split('');
const sum = numbers.reduce((acc, cur) => acc + parseInt(cur), 0);
console.log(sum);