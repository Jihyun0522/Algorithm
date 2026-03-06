import sys
input = sys.stdin.readline

T_str = input().strip()
if T_str:
    T = int(T_str)
    for _ in range(T):
        N = int(input())
        print(N**2)