function solution(n) {
    if (n < 2) {
        return n;
    }
    
    let a = 0;
    let b = 1;
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        sum = ((a + b) + 1234567) % 1234567;
        a = b;
        b = sum;
    }
    
    return b;
}