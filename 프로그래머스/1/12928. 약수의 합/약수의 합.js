function solution(n) {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => n % cur === 0 ? acc + cur : acc, 0);
}