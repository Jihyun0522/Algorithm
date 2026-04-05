from collections import deque
import sys
input = sys.stdin.readline

N, M = map(int, input().split())
graph = [[] for _ in range(N + 1)]

for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

def bfs(start):
    visited = [-1] * (N + 1)
    visited[start] = 0
    queue = deque([start])
    while queue:
        v = queue.popleft()
        for next_v in graph[v]:
            if visited[next_v] == -1:
                visited[next_v] = visited[v] + 1
                queue.append(next_v)
    return sum(visited[1:])

min_bacon = float('inf')
result = 0

for i in range(1, N + 1):
    bacon = bfs(i)
    if bacon < min_bacon:
        min_bacon = bacon
        result = i

print(result)