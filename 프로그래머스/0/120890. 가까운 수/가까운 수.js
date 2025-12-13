function solution(array, n) {
    array.sort((a, b) => {
        const diffA = Math.abs(a - n);
        const diffB = Math.abs(b - n);
        
        if (diffA !== diffB) return diffA - diffB;
        
        return a - b;
    })
    return array[0];
}