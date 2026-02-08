function solution(want, number, discount) {
    let answer = 0;
    
    const wantMap = {};
    want.forEach((item, idx) => {
        wantMap[item] = number[idx];
    });

    for (let i = 0; i <= discount.length - 10; i++) {
        const currentDiscount = {};
        
        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            currentDiscount[item] = (currentDiscount[item] || 0) + 1;
        }

        if (isMatch(wantMap, currentDiscount)) {
            answer++;
        }
    }

    return answer;
}

function isMatch(obj1, obj2) {
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}