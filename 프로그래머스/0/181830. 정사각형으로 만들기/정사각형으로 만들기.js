function solution(arr) {
    const n = arr.length;
    const m = arr[0].length;
    
    if (n > m) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - m; j++) {
                arr[i].push(0);
            }
        }
    } else {
        for (let i = 0; i < m - n; i++) {
            arr.push(Array(m).fill(0));
        }
    }

    return arr;
}