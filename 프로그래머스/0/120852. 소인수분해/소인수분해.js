function solution(n) {
    const primeFactors = new Set();
    let i = 2;
    let currentN = n;
    
    while (i * i <= currentN) {
        if (currentN % i === 0) {
            primeFactors.add(i);
            currentN = Math.trunc(currentN / i); 
        } else {
            i++;
        }
    }
    
    if (currentN > 1) {
        primeFactors.add(currentN);
    }
    
    return [...primeFactors].sort((a, b) => a - b);
}