function solution(array, commands) {
    let answer = [];
    
    for (let command of commands) {
        let [i, j, k] = command;
        const tempArr = array.slice(i - 1, j);
        answer.push(tempArr.sort((a, b) => a - b)[k - 1]);
    }
    
    return answer;
}