function solution(n) {
    const targetCount = countOnes(n);
    let nextNum = n + 1;
    
    while (true) {
        if (countOnes(nextNum) === targetCount) {
            return nextNum;
        }
        nextNum++;
    }
}

function countOnes(num) {
    return num.toString(2).split('1').length - 1;
}