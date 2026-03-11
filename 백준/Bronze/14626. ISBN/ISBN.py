import sys
input = sys.stdin.readline

isbn = input().strip()

total_sum = 0
target_weight = 0

for i in range(13):
    weight = 1 if i % 2 == 0 else 3
    
    if isbn[i] == '*':
        target_weight = weight
    else:
        total_sum += int(isbn[i]) * weight

for x in range(10):
    if (total_sum + target_weight * x) % 10 == 0:
        print(x)
        break