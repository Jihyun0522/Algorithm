function solution(s) {
    const counts = s.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
    
    return Object.keys(counts).filter(char => {
        return counts[char] === 1;
    }).sort().join('');
}