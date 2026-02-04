function solution(n) {
    if (n <= 2) {
        return n;
    }
    
    let a = 1;
    let b = 2;
    let sum = 0;

    for (let i = 3; i <= n; i++) {
        sum = ((a + b) + 1234567) % 1234567;
        a = b;
        b = sum;
    }
    
    return b;
}