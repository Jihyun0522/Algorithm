function solution(arr, flag) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];
        const f = flag[i];
        
        if (f) {
            answer = answer.concat(Array.from({ length: a * 2 }, () => a));
        } else {
            answer = answer.slice(0, -a);
        }
    }
    
    return answer;
}