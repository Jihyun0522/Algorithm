import sys

nums = list(map(int, sys.stdin.readline().split()))

total_sum = 0

for n in nums:
    total_sum += (n ** 2)

print(total_sum % 10)