function solution(strArr) {
    const lengthList = strArr.map(str => str.length);
    
    const lengthCounts = new Map();
    for (const length of lengthList) {
        lengthCounts.set(length, (lengthCounts.get(length) || 0) + 1);
    }
    
    return Math.max(...lengthCounts.values());
}