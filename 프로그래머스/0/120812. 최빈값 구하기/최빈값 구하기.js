function solution(array) {
    const counts = new Map();

     for (const num of array) {
         counts.set(num, (counts.get(num) || 0) + 1);
    }

    if (counts.size === 0) return -1;
    
    const maxCount = Math.max(...counts.values());
    let mode = [];

    for (const [key, value] of counts) {
        if (value === maxCount) {
            mode.push(key);
        }
    }
    
    return mode.length === 1 ? mode[0] : -1;
}