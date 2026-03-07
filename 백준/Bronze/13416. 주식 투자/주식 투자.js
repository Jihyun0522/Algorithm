const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);
let cursor = 0;
const T = Number(input[cursor++]);

for (let t = 0; t < T; t++) {
    const N = Number(input[cursor++]);
    let totalProfit = 0;

    for (let n = 0; n < N; n++) {
        const A = Number(input[cursor++]);
        const B = Number(input[cursor++]);
        const C = Number(input[cursor++]);

        totalProfit += Math.max(A, B, C, 0);
    }
    console.log(totalProfit);
}