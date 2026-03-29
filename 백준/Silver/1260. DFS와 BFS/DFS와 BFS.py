from collections import deque

N, M, V = map(int, input().split())
graph = [[] for _ in range(N + 1)]

dfs_visited = [False] * (N + 1)
def dfs(v):
    dfs_visited[v] = True
    print(v, end=' ')
    for next_v in graph[v]:
        if not dfs_visited[next_v]:
            dfs(next_v)

bfs_visited = [False] * (N + 1)
def bfs(start):
    queue = deque([start])
    bfs_visited[start] = True

    while queue:
        v = queue.popleft()
        print(v, end=' ')
        for next_v in graph[v]:
            if not bfs_visited[next_v]:
                bfs_visited[next_v] = True
                queue.append(next_v)

for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
    
for i in range(N + 1):
    graph[i].sort()

dfs(V)
print()
bfs(V)