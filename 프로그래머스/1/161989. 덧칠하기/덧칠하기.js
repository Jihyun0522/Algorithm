function solution(n, m, section) {
    let count = 0;
    let lastPainted = 0;
    
    for (let s of section) {
        if (s > lastPainted) {
            count++;
            lastPainted = s + m - 1;
        }
    }
    
    return count;
}