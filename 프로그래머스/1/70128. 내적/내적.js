function solution(a, b) {
    return a.reduce((acc, cur, i) => {
        return acc + (a[i] * b[i]);
    }, 0);
}