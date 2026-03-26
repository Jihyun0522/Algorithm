const input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const num = input[1].split(' ').map(Number);

const dp = new Array(N + 1).fill(0);
for (let i = 1; i < N + 1; i++) {
    dp[i] = dp[i - 1] + num[i - 1]
}

for (let k = 2; k < M + 2; k++) {
    const [i, j] = input[k].split(' ').map(Number);
    console.log(dp[j] - dp[i - 1]);
}