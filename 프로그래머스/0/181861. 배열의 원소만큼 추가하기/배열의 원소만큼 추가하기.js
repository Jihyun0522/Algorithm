function solution(arr) {
    return arr.flatMap(a => {
        return Array.from({ length: a }, () => a);
    });
}