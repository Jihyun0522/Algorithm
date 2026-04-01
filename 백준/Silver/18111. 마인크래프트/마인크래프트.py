import sys

data = sys.stdin.read().split()
idx = 0
N, M, B = int(data[0]), int(data[1]), int(data[2])
blocks = [int(data[i]) for i in range(3, 3 + N*M)]

min_time = float('inf')
result_h = 0
min_h = min(blocks)
max_h = max(blocks)

for h in range(min_h, max_h + 1):
    remove = 0
    add = 0
    
    for block in blocks:
        if block > h:
            remove += block - h
        elif block < h:
            add += h - block
            
    if B + remove >= add:
        time = remove * 2 + add
        if time < min_time:
            min_time = time
            result_h = h
        elif time == min_time:
            result_h = h

print(min_time, result_h)