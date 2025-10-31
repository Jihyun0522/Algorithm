function solution(a, b) {
    const ab = +`${a}${b}`;
    const mult = 2 * a * b;
    
    return ab > mult ? ab : mult;
}