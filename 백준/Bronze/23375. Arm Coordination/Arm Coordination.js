const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [x, y] = input[0].split(/\s+/).map(Number);
const r = Number(input[1]);

console.log(`${x - r} ${y - r}`);
console.log(`${x + r} ${y - r}`);
console.log(`${x + r} ${y + r}`);
console.log(`${x - r} ${y + r}`);