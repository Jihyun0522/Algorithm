function solution(board) {
    const n = board.length;
    const danger = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 1) {
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr;
                        const nc = c + dc;

                        if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                            danger[nr][nc] = 1;
                        }
                    }
                }
            }
        }
    }
    
    return danger.flat().filter(v => v === 0).length;
}