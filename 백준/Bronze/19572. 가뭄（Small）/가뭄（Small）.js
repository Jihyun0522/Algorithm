const [d1, d2, d3] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
const total = (d1 + d2 + d3) / 2;

const a = total - d3;
const b = total - d2;
const c = total - d1;

if (a <= 0 || b <= 0 || c <= 0) {
    console.log(-1);
} else {
    console.log(1);
    console.log(`${a.toFixed(1)} ${b.toFixed(1)} ${c.toFixed(1)}`);
}