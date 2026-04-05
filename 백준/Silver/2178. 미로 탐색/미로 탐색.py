from collections import deque
import sys
input = sys.stdin.readline

N, M = map(int, input().split())
maze = [list(map(int, input().strip())) for _ in range(N)]
visited = [[False] * M for _ in range(N)]

queue = deque([(0, 0, 1)])
visited[0][0] = True

while queue:
    row, col, dist = queue.popleft()
    
    if row == N-1 and col == M-1:
        print(dist)
        break
    
    for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
        nr, nc = row + dr, col + dc
        if 0 <= nr < N and 0 <= nc < M and maze[nr][nc] == 1 and not visited[nr][nc]:
            visited[nr][nc] = True
            queue.append((nr, nc, dist + 1))