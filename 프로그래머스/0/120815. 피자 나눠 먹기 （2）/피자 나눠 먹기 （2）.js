function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(n) {
    return n / gcd(6, n);
}