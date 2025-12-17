function solution(num, k) {
    const idx = String(num).split('').indexOf(String(k));
    return idx === -1 ? idx : idx + 1;
}