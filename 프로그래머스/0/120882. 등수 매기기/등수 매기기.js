function solution(score) {
    const sums = score.map(s => s[0] + s[1]);
    const sortSums = [...sums].sort((a, b) => b - a);
    return sums.map(sum => sortSums.indexOf(sum) + 1);
}