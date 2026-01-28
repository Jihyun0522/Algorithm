function solution(n) {
    let checkList = new Array(n + 1).fill(true);
    checkList[0] = false;
    checkList[1] = false;
    
    for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
        if (checkList[i]) {
            for (let j = i * i; j < n + 1; j += i) {
                checkList[j] = false;
            }
        }
    }
    
    return checkList.reduce((acc, curr) => acc + (curr ? 1 : 0), 0);
}