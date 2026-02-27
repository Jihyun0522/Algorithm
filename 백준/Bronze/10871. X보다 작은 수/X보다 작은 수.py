import sys

n, x = map(int, sys.stdin.readline().split())
a = list(map(int, sys.stdin.readline().split()))

for num in a:
    if (num < x):
        print(num, end=" ")
