const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const T = input.shift();

for (let i = 0; i < input.length; i++) {
    const n = input[i];
    
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    
    if (n >= 2) {
        dp[2] = 1;
    }
    if (n >= 3) {
        dp[3] = 1;
    }
    
    for (let j = 4; j <= n; j++) {
        dp[j] = dp[j-3] + dp[j-2]
    }
    
    console.log(dp[n]);
}