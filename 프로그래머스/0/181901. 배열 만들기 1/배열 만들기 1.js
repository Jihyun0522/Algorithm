function solution(n, k) {
    return Array.from({ length: n }, (_, i) => i + 1)
                .filter(x => x % k === 0);
}