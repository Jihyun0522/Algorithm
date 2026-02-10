def solution(n):
    board = [0] * n
    
    def check(row, col):
        for i in range(row):
            if board[i] == col or abs(i - row) == abs(board[i] - col):
                return False
        return True

    def dfs(row):
        if row == n:
            return 1
        
        count = 0
        for col in range(n):
            if check(row, col):
                board[row] = col
                count += dfs(row + 1)
        return count

    return dfs(0)