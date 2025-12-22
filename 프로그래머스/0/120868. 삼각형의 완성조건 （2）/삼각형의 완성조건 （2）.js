function solution(sides) {
    const [a, b] = sides;
    const low = Math.abs(a - b);
    const high = a + b;
    return high - low - 1;
}