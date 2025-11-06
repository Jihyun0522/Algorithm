function solution(l, r) {
    let answer = [];
    
    for (let num = l; num <= r; num++) {
        const strNum = String(num);
        if (!/[^05]/.test(strNum)) {
            answer.push(num);
        }
    }
    
    return answer.length > 0 ? answer : [-1];
}