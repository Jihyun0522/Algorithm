function solution(k, score) {
    let answer = [];
    let hallOfFame = [];
    
    for (let s of score) {
        hallOfFame.push(s);
        hallOfFame.sort((a, b) => a - b);
        if (hallOfFame.length > k) {
            hallOfFame.shift();
        }
        answer.push(hallOfFame[0]);
    }
    
    return answer;
}