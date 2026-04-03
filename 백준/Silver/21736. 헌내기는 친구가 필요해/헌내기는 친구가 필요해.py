from collections import deque
import sys
input = sys.stdin.readline

N, M = map(int, input().split())
campus = []
start = (0, 0)

for i in range(N):
    row = list(input().strip())
    campus.append(row)
    for j in range(M):
        if row[j] == 'I':
            start = (i, j)

def bfs(x, y):
    queue = deque([(x, y)])
    visited = [[False] * M for _ in range(N)]
    visited[x][y] = True
    count = 0
    
    while queue:
        cx, cy = queue.popleft()
        for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < N and 0 <= ny < M and campus[nx][ny] != 'X' and not visited[nx][ny]:
                visited[nx][ny] = True
                if campus[nx][ny] == 'P':
                    count += 1
                queue.append((nx, ny))
    
    return count

result = bfs(*start)
print(result if result > 0 else 'TT')