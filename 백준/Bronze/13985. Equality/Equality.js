const input = require('fs').readFileSync(0).toString().trim().split(' ');
const [a, , b, , c] = input.map(Number);
console.log(a + b === c ? 'YES' : 'NO');