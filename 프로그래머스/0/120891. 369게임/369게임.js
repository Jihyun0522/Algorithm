function solution(order) {
    const matches = String(order).match(/[369]/g);
    return matches ? matches.length : 0;
}