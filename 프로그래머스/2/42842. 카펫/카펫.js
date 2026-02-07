function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let h = 3; h <= Math.floor(Math.sqrt(total)); h++) {
        let w = 0;
        if (total % h === 0) {
            w = Math.floor(total / h);
            if ((w - 2) * (h - 2) === yellow) {
                return [w, h];
            }
        }
    }
}