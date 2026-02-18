const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

let prize = 0;

if (a === b && b === c) {
    prize = 10000 + a * 1000;
} else if (a === b || a === c) {
    prize = 1000 + a * 100;
} else if (b === c) {
    prize = 1000 + b * 100;
} else {
    const maxVal = Math.max(a, b, c);
    prize = maxVal * 100;
}

console.log(prize);