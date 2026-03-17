import sys
from collections import Counter

input = sys.stdin.readline

N = int(input())
cards = Counter(map(int, input().split()))

M = int(input())
queries = list(map(int, input().split()))

ans = []
for q in queries:
    ans.append(str(cards[q]))

print(' '.join(ans))