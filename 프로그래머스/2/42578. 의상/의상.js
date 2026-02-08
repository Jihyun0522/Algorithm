function solution(clothes) {
    const clothMap = {};
    
    for (const [name, type] of clothes) {
        clothMap[type] = (clothMap[type] || 0) + 1;
    }
    
    let combinations = 1;
    for (const type in clothMap) {
        combinations *= (clothMap[type] + 1);
    }
    
    return combinations - 1;
}