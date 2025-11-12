function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        let q = query[i];
        if (i % 2 == 0) {
            arr = arr.slice(0, q + 1);
        } else {
            arr = arr.slice(q, arr.lenth);
        }
    }
    
    return arr;
}