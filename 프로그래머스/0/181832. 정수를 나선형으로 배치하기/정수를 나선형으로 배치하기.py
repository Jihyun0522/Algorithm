def solution(n):
    arr = [[0] * n for _ in range(n)]
    
    dr = [0, 1, 0, -1]
    dc = [1, 0, -1, 0]
    
    r, c = 0, 0
    d = 0
    num = 1
    
    while num <= n * n:
        arr[r][c] = num
        num += 1
        
        nr, nc = r + dr[d], c + dc[d]
        
        if not (0 <= nr < n and 0 <= nc < n and arr[nr][nc] == 0):
            d = (d + 1) % 4
            nr, nc = r + dr[d], c + dc[d]
            
        r, c = nr, nc
        
    return arr