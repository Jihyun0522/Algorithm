const input = require('fs').readFileSync(0).toString().trim();
const [A, B, V] = input.split(/\s+/).map(Number);
console.log(Math.ceil((V - A) / (A - B)) + 1);