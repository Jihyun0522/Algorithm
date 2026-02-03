function solution(board) {
    let maxSide = 0;
    
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === 1) maxSide = 1;
    }
    for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] === 1) maxSide = 1;
    }

    // 2. DP 루프 (1부터 시작!)
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
                
                if (board[i][j] > maxSide) maxSide = board[i][j];
            }
        }
    }

    return maxSide * maxSide;
}