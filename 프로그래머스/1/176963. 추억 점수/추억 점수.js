function solution(name, yearning, photo) {
    let answer = [];

    const scoreMap = {};
    name.forEach((n, i) => {
        scoreMap[n] = yearning[i];
    });
    
    for (let p of photo) {
        let score = 0;
        for (let person of p) {
            score += scoreMap[person] || 0;
        }
        answer.push(score);
    }
    
    return answer;
}