from collections import deque

N = int(input())
graph = [[] for _ in range(N + 1)]

E = int(input())
for _ in range(E):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

visited = [False] * (N + 1)
queue = deque([1])
visited[1] = True
count = 0

while queue:
    node = queue.popleft()
    for next in graph[node]:
        if not visited[next]:
            visited[next] = True
            queue.append(next)
            count += 1

print(count)