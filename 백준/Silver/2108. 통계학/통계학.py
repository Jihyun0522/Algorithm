import sys
from collections import Counter
input = sys.stdin.readline

N = int(input())
nums = [int(sys.stdin.readline()) for _ in range(N)]
nums.sort()

counter = Counter(nums)
max_count = max(counter.values())
modes = sorted([k for k, v in counter.items() if v == max_count])

print(round(sum(nums) / N))
print(nums[N // 2])
print(modes[1] if len(modes) > 1 else modes[0])
print(max(nums) - min(nums))