function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n) {
    let primeCount = 0;
    
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }
    
    return n - 1 - primeCount;
}