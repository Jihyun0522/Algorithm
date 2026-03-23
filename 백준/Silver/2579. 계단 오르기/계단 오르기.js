const input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input.shift());
const points = input.map(Number);

const dp = new Array(N + 1).fill(0);
dp[1] = points[0];

if (N >= 2) {
    dp[2] = points[0] + points[1];
}

for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(dp[i-3] + points[i-2] + points[i-1], dp[i-2] + points[i-1]);
}

console.log(dp[N]);