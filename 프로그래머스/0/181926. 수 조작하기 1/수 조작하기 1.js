const CHANGES = {
    "w": 1,
    "s": -1,
    "d": +10,
    "a": -10
}

function solution(n, control) {
    let answer = n;
    const controlArr = control.split('');
    for (let i = 0; i < controlArr.length; i++) {
        answer += CHANGES[controlArr[i]];
    }
    return answer;
}