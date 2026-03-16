import sys
input = sys.stdin.readline

N = int(input())
A = set(map(int, input().split()))

M = int(input())
query = list(map(int, input().split()))

for x in query:
    if x in A:
        print(1)
    else:
        print(0)
