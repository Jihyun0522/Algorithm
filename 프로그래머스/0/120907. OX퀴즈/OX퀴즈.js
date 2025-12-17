function solution(quiz) {
    let answer = [];
    
    for (const q of quiz) {
        const [x, op, y, _, z] = q.split(' ');
        const res = op === '+' ? Number(x) + Number(y) : Number(x) - Number(y);
        answer.push(res === Number(z) ? "O" : "X");
    }
    
    return answer;
}