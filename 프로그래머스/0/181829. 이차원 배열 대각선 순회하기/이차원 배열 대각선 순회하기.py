def solution(board, k):
    total_sum = 0
    R = len(board)
    C = len(board[0])
    
    for i in range(R):
        for j in range(C):
            if i + j <= k:
                total_sum += board[i][j]
    
    return total_sum