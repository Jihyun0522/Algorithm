function bfs(start, target) {
    const visited = new Array(100001).fill(false);
    const queue = [[start, 0]];
    visited[start] = true ;
    
    let front = 0;
    while (front < queue.length)  {
        const [pos, time] = queue[front++];
        
        if (pos === target) {
            return time;
        }
        
        for (const nextPos of [pos - 1, pos + 1, pos * 2]) {
            if ((nextPos >= 0 && nextPos <= 100000) && !visited[nextPos]) {
                visited[nextPos] = true;
                queue.push([nextPos, time + 1]);
            }
        }
    }
}

const [N, K] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(bfs(N, K));