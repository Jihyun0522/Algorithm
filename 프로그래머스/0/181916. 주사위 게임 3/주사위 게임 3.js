function solution(a, b, c, d) {
    const l = [a, b, c, d];
    const counts = l.map(x => l.filter(y => y === x).length);
    const maxCount = Math.max(...counts);
    
    if (maxCount === 4) {
        return 1111 * a;

    } else if (maxCount === 3) {
        const p = l[counts.indexOf(3)];
        const q = l[counts.indexOf(1)];
        
        return (10 * p + q) ** 2;
    } else if (maxCount === 2) {
        const minCount = Math.min(...counts);

        if (minCount === 2) {
            const maxL = Math.max(...l);
            const minL = Math.min(...l);
            
            return (maxL + minL) * Math.abs(maxL - minL);

        } else {
            let product = 1;
            for (let i = 0; i < counts.length; i++) {
                if (counts[i] === 1) {
                    product *= l[i];
                }
            }
            return product;
        }

    } else {
        return Math.min(...l);
    }
}