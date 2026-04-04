import sys
input = sys.stdin.readline
from collections import defaultdict

N = int(input())
fruits = list(map(int, input().split()))

left = 0
max_len = 0
counter = defaultdict(int)

for right in range(N):
    counter[fruits[right]] += 1
    
    while len(counter) > 2:
        counter[fruits[left]] -= 1
        if counter[fruits[left]] == 0:
            del counter[fruits[left]]
        left += 1
    
    max_len = max(max_len, right - left + 1)

print(max_len)