const CHANGES = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a"
}

function solution(numLog) {
    let answer = '';
    
    for (let i = 0; i < numLog.length - 1; i++) {
        const diff = numLog[i+1] - numLog[i];
        answer += CHANGES[diff];
    }
    
    return answer;
}