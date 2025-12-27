function solution(common) {
    const n = common.length;
    
    if (common[1] - common[0] === common[2] - common[1]) {
        return common[n - 1] + (common[1] - common[0]);
    } else {
        return common[n - 1] * (common[1] / common[0]);
    }
}