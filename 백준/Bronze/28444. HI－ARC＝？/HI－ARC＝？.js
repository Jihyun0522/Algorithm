const input = require('fs').readFileSync(0).toString().trim().split(' ');
const [H, I, A, R, C] = input.map(Number);

console.log((H * I) - (A * R * C));