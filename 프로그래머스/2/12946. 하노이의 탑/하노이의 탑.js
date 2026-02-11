function hanoi(n, arr, start, to, via) {
    if (n === 1) {
        arr.push([start, to]);
        return;
    }
    
    hanoi(n - 1, arr, start, via, to);
    arr.push([start, to]);
    hanoi(n - 1, arr, via, to, start);
}

function solution(n) {
    let answer = [];
    hanoi(n, answer, 1, 3, 2);
    return answer;
}