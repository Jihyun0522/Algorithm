function solution(k, tangerine) {
    const counts = {};
    for (const size of tangerine) {
        counts[size] = (counts[size] || 0) + 1;
    }
    
    const sortedCounts = Object.values(counts).sort((a, b) => b - a);
    
    let answer = 0;
    let sum = 0;
    for (const count of sortedCounts) {
        sum += count;
        answer++;
        if (sum >= k) break;
    }
    
    return answer;
}