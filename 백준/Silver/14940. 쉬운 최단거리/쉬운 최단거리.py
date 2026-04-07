from collections import deque

n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

dist = [[0 if grid[i][j] == 0 else -1 for j in range(m)] for i in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(start_x, start_y):
    queue = deque()
    queue.append((start_x, start_y))
    dist[start_x][start_y] = 0

    while queue:
        x, y = queue.popleft()
        
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]
            
            if 0 <= nx < n and 0 <= ny < m:
                if dist[nx][ny] == -1 and grid[nx][ny] != 0:
                    dist[nx][ny] = dist[x][y] + 1
                    queue.append((nx, ny))

for i in range(n):
    for j in range(m):
        if grid[i][j] == 2:
            bfs(i, j)
            
for row in dist:
    print(' '.join(map(str, row)))