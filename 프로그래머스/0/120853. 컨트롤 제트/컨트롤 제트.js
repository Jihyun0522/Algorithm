function solution(s) {
    let total = 0;
    let last = 0;
    
    for (const char of s.split(' ')) {
        if (char === 'Z') {
            total -= last;
            last = 0;
        } else {
            total += parseInt(char);
            last = parseInt(char);
        }
    }
    
    return total;
}