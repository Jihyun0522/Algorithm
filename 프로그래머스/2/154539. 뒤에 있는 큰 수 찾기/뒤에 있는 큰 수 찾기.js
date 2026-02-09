function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    let stack = [];
    
    for (let i = 0; i < numbers.length; i++) {
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            const lastIdx = stack.pop();
            answer[lastIdx] = numbers[i];
        }
        stack.push(i);
    }
    
    return answer;
}