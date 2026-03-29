import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

def dfs(x, y):
    visited[x][y] = True
    for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
        nx, ny = x + dx, y + dy
        if 0 <= nx < N and 0 <= ny < M and field[nx][ny] == 1 and not visited[nx][ny]:
            dfs(nx, ny)

T = int(input())
for _ in range(T):
    M, N, K = map(int, input().split())
    field = [[0] * M for _ in range(N)]
    visited = [[False] * M for _ in range(N)]
    
    for _ in range(K):
        x, y = map(int, input().split())
        field[y][x] = 1
    
    count = 0
    for i in range(N):
        for j in range(M):
            if field[i][j] == 1 and not visited[i][j]:
                dfs(i, j)
                count += 1
    
    print(count)