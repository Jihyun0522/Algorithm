M = int(input())
N = int(input())
result = []

for num in range(M, N + 1):
    if int(num ** 0.5) ** 2 == num:
        result.append(num)

if len(result) == 0:
    print(-1)
else:
    print(sum(result))
    print(min(result))