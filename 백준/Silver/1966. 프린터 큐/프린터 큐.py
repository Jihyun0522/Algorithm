from collections import deque

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    priorities = list(map(int, input().split()))
    queue = deque([(p, i) for i, p in enumerate(priorities)])
    
    count = 0
    while queue:
        max_p = max(queue, key=lambda x: x[0])[0]
        
        current = queue.popleft()
        
        if current[0] < max_p:
            queue.append(current)
        else:
            count += 1
            if current[1] == M:
                print(count)
                break