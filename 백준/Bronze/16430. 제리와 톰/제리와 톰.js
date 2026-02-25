const input = require('fs').readFileSync(0).toString().trim().split(' ');
const A = Number(input[0]);
const B = Number(input[1]);

console.log(`${B - A} ${B}`);