function solution(s) {
    const center = s.length / 2;
    
    return s.length % 2 === 0 
        ? s.slice(center - 1, center + 1) 
        : s.slice(center, center + 1);
}