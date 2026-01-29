function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    for (let i of ingredient) {
        stack.push(i);
        
        if (stack.length >= 4) {
            if (stack.slice(-4).join('') === '1231') {
                answer++;
                stack.splice(-4);
            }
        }
    }
    
    return answer;
}