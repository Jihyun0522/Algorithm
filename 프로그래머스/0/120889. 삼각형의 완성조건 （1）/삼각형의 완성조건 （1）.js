function solution(sides) {
    const longest = Math.max(...sides);
    const total = sides.reduce((acc, curr) => acc + curr, 0);
    
    return longest < total - longest ? 1 : 2;
}