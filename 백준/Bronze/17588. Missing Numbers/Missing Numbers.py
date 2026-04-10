n = int(input())
numbers = [int(input()) for _ in range(n)]
num_set = set(numbers)
last = numbers[-1]

missing = []
for num in range(1, last + 1):
    if num not in num_set:
        missing.append(num)

if missing:
    print('\n'.join(map(str, missing)))
else:
    print('good job')