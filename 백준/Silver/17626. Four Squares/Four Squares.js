const n = Number(require('fs').readFileSync(0).toString().trim());
const d = new Array(n + 1).fill(10 ** 9);
d[0] = 0;

const squares = [];
let i = 1;
while (i * i <= n) {
    squares.push(i * i);
    i++;
}

for (let i = 1; i <= n; i++) {
    for (const sq of squares) {
        if (sq > i) break;
        d[i] = Math.min(d[i], d[i - sq] + 1);
    }
}

console.log(d[n]);