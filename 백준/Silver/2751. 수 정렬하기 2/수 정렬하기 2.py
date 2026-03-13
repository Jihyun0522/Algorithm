import sys

input = sys.stdin.readline
n = int(input())

numbers = []
for _ in range(n):
    numbers.append(int(input()))

numbers.sort()

sys.stdout.write('\n'.join(map(str, numbers)) + '\n')