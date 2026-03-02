const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const maxVal = Math.max(...input);
const maxPos = input.indexOf(maxVal) + 1;

console.log(maxVal);
console.log(maxPos);