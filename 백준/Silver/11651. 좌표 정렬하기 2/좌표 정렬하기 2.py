import sys
input = sys.stdin.readline

N = int(input())
points = []

for _ in range(N):
    x, y = map(int, input().split())
    points.append((x, y))

points.sort(key=lambda p: (p[1], p[0]))

for p in points:
    print(p[0], p[1])