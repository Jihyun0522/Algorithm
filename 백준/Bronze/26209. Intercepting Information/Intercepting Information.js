const input = require('fs').readFileSync(0).toString().trim().split(' ');

console.log(input.includes('9') ? 'F' : 'S');