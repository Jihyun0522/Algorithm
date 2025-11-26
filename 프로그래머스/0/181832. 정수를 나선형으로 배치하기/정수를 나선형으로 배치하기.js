function solution(n) {
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    
    const dr = [0, 1, 0, -1];
    const dc = [1, 0, -1, 0];

    let r = 0;
    let c = 0;
    let d = 0;
    let num = 1;
    
    while(num <= n * n) {
        arr[r][c] = num;
        num += 1;

        let nr = r + dr[d];
        let nc = c + dc[d];

        if (!(nr >= 0 && nr < n && nc >= 0 && nc < n && arr[nr][nc] === 0)) {
            d = (d + 1) % 4;
            nr = r + dr[d];
            nc = c + dc[d];
        }
        
        r = nr;
        c = nc;
    }
    
    return arr;
}