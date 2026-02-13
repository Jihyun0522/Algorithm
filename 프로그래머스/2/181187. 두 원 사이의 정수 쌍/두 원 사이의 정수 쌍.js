function solution(r1, r2) {
    let answer = 0;
    
    for (let x = 1; x <= r2; x++) {
        const yMax = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
        
        let yMin = 0;
        if (x < r1) {
            yMin = Math.ceil(Math.sqrt(r1 ** 2 - x ** 2));
        }
        
        answer += (yMax - yMin + 1);
    }
    
    return answer * 4;
}