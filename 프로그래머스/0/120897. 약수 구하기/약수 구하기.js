function solution(n) {
    const divisors = [];
    
    for (let num = 1; num <= n; num++) {
        if (n % num === 0) {
            divisors.push(num);
        }
    }
    
    return divisors;
}