function solution(a, b, c) {
    const uniqueCount = new Set([a, b, c]).size;
    let answer = 0;
    
    if (uniqueCount == 1) {
        return 3*a*3*(a**2)*3*(a**3);
    } else if (uniqueCount == 2) {
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    } else {
        return a + b + c;
    }
    
    return answer;
}