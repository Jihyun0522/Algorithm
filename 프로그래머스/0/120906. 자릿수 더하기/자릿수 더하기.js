function solution(n) {
    return String(n).split('').reduce((acc, curr) => {
       return acc + Number(curr); 
    }, 0);
}