function check(board, row, col) {
    for (let i = 0; i < row; i++) {
        if (board[i] === col || Math.abs(i - row) === Math.abs(board[i] - col)) {
            return false;
        }
    }
    return true;
}

function dfs(n, board, row) {
    if (row === n) {
        return 1;
    }
    
    let count = 0;
    for (let col = 0; col < n; col++) {
        if (check(board, row, col)) {
            board[row] = col;
            count += dfs(n, board, row + 1);
        }
    }
    
    return count;
}

function solution(n) {
    let board = new Array(4).fill(0);
    return dfs(n, board, 0);
}