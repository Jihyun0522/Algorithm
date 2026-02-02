function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);
    
    for (let amount of d) {
        if (budget >= amount) {
            budget -= amount;
            answer++;
        } else {
            break;
        }
    }
    
    return answer;
}