def solution(board):
    row_count = len(board)
    col_count = len(board[0])
    
    max_side = 0
    for row in board:
        if max(row) > 0:
            max_side = 1
            break

    for i in range(1, row_count):
        for j in range(1, col_count):
            if board[i][j] == 1:
                board[i][j] = min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1
                if board[i][j] > max_side:
                    max_side = board[i][j]
    
    return max_side * max_side