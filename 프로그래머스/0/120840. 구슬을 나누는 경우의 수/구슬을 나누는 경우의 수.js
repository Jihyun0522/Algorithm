function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}

function solution(balls, share) {
    const n = BigInt(balls);
    const k = BigInt(share);
    
    const numerator = factorial(n);
    const denominator = factorial(k) * factorial(n - k);
    
    return numerator / denominator;
}