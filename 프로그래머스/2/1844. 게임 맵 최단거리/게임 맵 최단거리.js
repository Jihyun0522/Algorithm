function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [[0, 0]];
    let head = 0;
    
    while (head < queue.length) {
        const [x, y] = queue[head++];
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = maps[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    
    const answer = maps[n - 1][m - 1];
    return answer > 1 ? answer : -1;
}