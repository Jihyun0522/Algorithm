function getGCD(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
}

function solution(arr) {
    return arr.reduce((acc, cur) => getLCM(acc, cur));
}