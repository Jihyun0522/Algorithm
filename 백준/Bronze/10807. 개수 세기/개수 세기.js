const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ');
const v = input[2];
const count = numbers.filter(num => num === v).length;

console.log(count);