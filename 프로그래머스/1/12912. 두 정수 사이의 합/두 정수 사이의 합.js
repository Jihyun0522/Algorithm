function solution(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    
    return (max + min) * (max - min + 1) / 2;
}