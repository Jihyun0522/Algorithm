function solution(n) {
    let totalSum = 0;
    
    for (let num = 2; num <= n; num += 2) {
        totalSum += num;
    }
    
    return totalSum;
}