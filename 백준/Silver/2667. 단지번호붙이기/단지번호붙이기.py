import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

N = int(input())
field = [list(map(int, input().strip())) for _ in range(N)]
visited = [[False] * N for _ in range(N)]

def dfs(x, y):
    visited[x][y] = True
    count = 1
    for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
        nx, ny = x + dx, y + dy
        if 0 <= nx < N and 0 <= ny < N and field[nx][ny] == 1 and not visited[nx][ny]:
            count += dfs(nx, ny)
    return count

result = []
for i in range(N):
    for j in range(N):
        if field[i][j] == 1 and not visited[i][j]:
            result.append(dfs(i, j))

result.sort()
print(len(result))
for r in result:
    print(r)