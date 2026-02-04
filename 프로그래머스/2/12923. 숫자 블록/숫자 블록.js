function solution(begin, end) {
    const result = [];

    for (let i = begin; i <= end; i++) {
        if (i === 1) {
            result.push(0);
            continue;
        }
        
        result.push(getMaxDivisor(i));
    }

    return result;
}

function getMaxDivisor(num) {
    let temp = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (num / i <= 10000000) {
                return num / i;
            }            
            temp = i;
        }
    }
    return temp;
}