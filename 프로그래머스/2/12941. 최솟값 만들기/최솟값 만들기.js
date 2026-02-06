function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((acc, val, idx) => {
        return acc + (val * B[idx]);
    }, 0);
}