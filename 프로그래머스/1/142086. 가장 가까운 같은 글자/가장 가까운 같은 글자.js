function solution(s) {
    const answer = [];
    const seen = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (seen[char] !== undefined) {
            answer.push(i - seen[char]);
        } else {
            answer.push(-1);
        }
        seen[char] = i;
    }

    return answer;
}