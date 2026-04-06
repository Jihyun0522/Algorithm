import heapq
import sys
input = sys.stdin.readline

heap = []
N = int(input())

for _ in range(N):
    num = int(input())
    
    if num == 0:
        if not heap:
            print(0)
        else:
            print(heapq.heappop(heap)[1])
    else:
        heapq.heappush(heap, (abs(num), num))