function solution(lines) {
    const count = {};
    
    for (const [start, end] of lines) {
        for (let i = start; i < end; i++) {
            count[i] = (count[i] || 0) + 1;
        }
    }
    
    return Object.values(count).filter(v => v >= 2).length;
}