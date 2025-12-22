def solution(board):
    dx = [-1, -1, -1, 0, 0, 1, 1, 1]
    dy = [-1, 0, 1, -1, 1, -1, 0, 1]

    n = len(board)
    danger_zone = [[0] * n for _ in range(n)]
    
    for r in range(n):
        for c in range(n):
            if board[r][c] == 1:
                for i in range(8):
                    nr, nc = r + dx[i], c + dy[i]
                    if 0 <= nr < n and 0 <= nc < n:
                        danger_zone[nr][nc] = 1
                danger_zone[r][c] = 1

    return sum(row.count(0) for row in danger_zone)