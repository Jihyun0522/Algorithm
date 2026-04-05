from collections import deque

def bfs(start, target):
    visited = [False] * 100001
    queue = deque([(start, 0)])
    visited[start] = True
    
    while queue:
        pos, time = queue.popleft()
        
        if pos == target:
            return time
        
        for next_pos in [pos - 1, pos + 1, pos * 2]:
            if 0 <= next_pos <= 100000 and not visited[next_pos]:
                visited[next_pos] = True
                queue.append((next_pos, time + 1))

N, K = map(int, input().split())
print(bfs(N, K))