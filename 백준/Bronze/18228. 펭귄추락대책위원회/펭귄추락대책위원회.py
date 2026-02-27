import sys

n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().split()))

p_idx = a.index(-1)

left_side = a[:p_idx]
right_side = a[p_idx+1:]

print(min(left_side) + min(right_side))