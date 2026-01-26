function solution(a, b, n) {
    let total = 0;
    
    while (n >= a) {
        const newCola = Math.floor(n / a) * b;
        total += newCola;
        n = (n % a) + newCola;
    }
    
    return total;
}