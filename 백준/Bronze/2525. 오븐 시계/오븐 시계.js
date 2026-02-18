const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);

let H = parseInt(input[0]);
let M = parseInt(input[1]);
const C = parseInt(input[2]);

let totalMinutes = H * 60 + M + C;

totalMinutes %= 1440;

console.log(Math.floor(totalMinutes / 60), totalMinutes % 60);