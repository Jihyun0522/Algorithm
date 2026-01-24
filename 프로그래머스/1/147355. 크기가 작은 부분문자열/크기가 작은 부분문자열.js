function solution(t, p) {
    let count = 0;
    const pLen = p.length;
    const pNum = Number(p);

    for (let i = 0; i <= t.length - pLen; i++) {
        const sub = t.slice(i, i + pLen);
        
        if (Number(sub) <= pNum) {
            count++;
        }
    }
    return count;
}