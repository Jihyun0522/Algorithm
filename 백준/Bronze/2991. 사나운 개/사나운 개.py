A, B, C, D = map(int, input().split())
arrival_times = list(map(int, input().split()))

for time in arrival_times:
    count = 0

    if (time - 1) % (A + B) < A:
        count += 1

    if (time - 1) % (C + D) < C:
        count += 1
    
    print(count)