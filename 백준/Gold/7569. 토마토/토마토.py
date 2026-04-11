import sys
from collections import deque
input = sys.stdin.readline

M, N, H = map(int, input().split())
graph = []
for h in range(H):
    layer = []
    for n in range(N):
        layer.append(list(map(int, input().split())))
    graph.append(layer)

queue = deque()
for h in range(H):
    for i in range(N):
        for j in range(M):
            if graph[h][i][j] == 1:
                queue.append((h, i, j))
                
dh = [0, 0, 0, 0, 1, -1]
dr = [-1, 1, 0, 0, 0, 0]
dc = [0, 0, -1, 1, 0, 0]

while queue:
    h, r, c = queue.popleft()
    for d in range(6):
        nh = h + dh[d]
        nr = r + dr[d]
        nc = c + dc[d]
        
        if 0 <= nh < H and 0 <= nr < N and 0 <= nc < M:
            if graph[nh][nr][nc] == 0:
                graph[nh][nr][nc] = graph[h][r][c] + 1
                queue.append((nh, nr, nc))

result = 0
for h in range(H):
    for i in range(N):
        for j in range(M):
            if graph[h][i][j] == 0:
                print(-1)
                exit();
            result = max(result, graph[h][i][j])

print(result - 1);