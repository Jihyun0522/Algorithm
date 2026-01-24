function solution(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        const leng = answer.length;
        if (leng === 0 || answer[leng - 1] != arr[i]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}