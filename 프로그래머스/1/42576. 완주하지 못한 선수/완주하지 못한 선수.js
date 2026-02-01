function solution(participant, completion) {
    const pMap = {};

    for (const name of participant) {
        if (pMap[name]) {
            pMap[name] += 1;
        } else {
            pMap[name] = 1;
        }
    }
    
    for (const name of completion) {
        if (pMap[name]) {
            pMap[name] -= 1;
        }
    }
    
    return Object.keys(pMap).find(key => pMap[key] > 0);
}