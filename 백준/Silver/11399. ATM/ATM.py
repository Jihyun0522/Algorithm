N = int(input())
times = list(map(int, input().split()))
times.sort()

total = 0
current = 0

for p in times:
    current += p
    total += current

print(total)