function solution(n) {
    if (n % 2 != 0) {
        return 0;
    }
    
    let dp = new Uint32Array(Math.max(3, n + 1));
    dp[0] = 1;
    dp[2] = 3;
    
    let sum = 0n;

    for (let i = 4; i <= n; i += 2) {
        sum += BigInt(dp[i - 4]) * 2n;

        let total = (BigInt(dp[i - 2]) * 3n) + sum;

        dp[i] = Number(total % 1000000007n);
}
    
    return dp[n];
}