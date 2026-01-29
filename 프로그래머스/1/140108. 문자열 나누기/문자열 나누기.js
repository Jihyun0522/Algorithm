function solution(s) {
    let answer = 0;
    let sameCount = 0;
    let diffCount = 0;
    let target = '';
    
    for (let char of s) {
        if (target === '') {
            target = char;
        }
        
        if (char === target) {
            sameCount++;
        } else {
            diffCount++;
        }
        
        if (sameCount === diffCount) {
            answer++;
            sameCount = 0;
            diffCount = 0;
            target = '';
        }
    }
    
    if (sameCount > 0) {
        answer++;
    }
    
    return answer;
}