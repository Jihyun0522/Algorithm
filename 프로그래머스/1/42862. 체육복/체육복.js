function solution(n, lost, reserve) {
    const realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    const realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    for (let r of realReserve) {
        const f = r - 1;
        const b = r + 1;
        
        const fIdx = realLost.indexOf(f);
        if (realLost.indexOf(f) !== -1) {
            realLost.splice(fIdx, 1);
            continue;
        }

        const bIdx = realLost.indexOf(b);
        if (bIdx !== -1) {
            realLost.splice(bIdx, 1);
        }
    }
    
    return n - realLost.length;
}