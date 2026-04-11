import sys
from collections import deque
input = sys.stdin.readline

M, N = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(N)]

queue = deque()

for i in range(N):
    for j in range(M):
        if graph[i][j] == 1:
            queue.append((i, j))

dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]

while queue:
    r, c = queue.popleft()
    
    for d in range(4):
        nr = r + dr[d]
        nc = c + dc[d]
        
        if 0 <= nr < N and 0 <= nc < M:
            if graph[nr][nc] == 0:
                graph[nr][nc] = graph[r][c] + 1
                queue.append((nr, nc))

result = 0
for i in range(N):
    for j in range(M):
        if graph[i][j] == 0:
            print(-1)
            exit()
        result = max(result, graph[i][j])

print(result - 1)