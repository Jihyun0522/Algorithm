function solution(arr) {
    L = arr.length;
    target = 1;
    
    while (target < L) {
        target *= 2;
    }
    
    return arr.concat(Array.from({ length: target - L }, () => 0));
}