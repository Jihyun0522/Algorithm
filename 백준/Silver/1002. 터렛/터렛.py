import sys

input = sys.stdin.readline
t = int(input())

for _ in range(t):
    x1, y1, r1, x2, y2, r2 = map(int, input().split())
    
    d_sq = (x1 - x2)**2 + (y1 - y2)**2
    sum_sq = (r1 + r2)**2
    diff_sq = (r1 - r2)**2
    
    if d_sq == 0:
        if r1 == r2:
            print(-1)
        else:
            print(0)
    elif d_sq == sum_sq or d_sq == diff_sq:
        print(1)
    
    elif diff_sq < d_sq < sum_sq:
        print(2)
    
    else:
        print(0)