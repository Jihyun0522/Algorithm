import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N = int(input())
    total = 0
    
    for _ in range(N):
        a, b, c = map(int, input().split())
        total += max(a, b, c, 0)
    
    print(total)