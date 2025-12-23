function solution(a, b) {
    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
    b = b / getGCD(a, b);
    
    while (b % 2 === 0) b = b / 2;
    while (b % 5 === 0) b = b / 5;
    
    return b === 1 ? 1 : 2;    
}