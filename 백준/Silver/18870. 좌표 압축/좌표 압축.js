const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());
const points = input[0].split(' ').map(Number);

const sortedUnique = [...new Set(points)].sort((a, b) => a - b);
const rank = new Map();
sortedUnique.forEach((v, i) => rank.set(v, i));

console.log(points.map(p => rank.get(p)).join(' '));