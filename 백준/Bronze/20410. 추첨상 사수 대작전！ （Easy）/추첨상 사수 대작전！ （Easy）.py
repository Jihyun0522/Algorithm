import sys

m, s, x1, x2 = map(int, sys.stdin.readline().split())

for a in range(m):
    for c in range(m):
        if (a * s + c) % m == x1 and (a * x1 + c) % m == x2:
            print(a, c)
            sys.exit()