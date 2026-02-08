function solution(elements) {
    const n = elements.length;
    const extended = [...elements, ...elements];
    const results = new Set();

    for (let len = 1; len <= n; len++) {
        for (let start = 0; start < n; start++) {
            const sum = extended.slice(start, start + len).reduce((acc, cur) => acc + cur, 0);
            results.add(sum);
        }
    }

    return results.size;
}