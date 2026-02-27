const input = require('fs').readFileSync(0).toString().split('\n');

const [N, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const result = A.filter(num => num < X);

console.log(result.join(' '));