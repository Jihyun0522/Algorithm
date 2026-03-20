import sys 

N, M = map(int, input().split())

board = sys.stdin.read().split()
count = []

for i in range(N - 7):
    for j in range(M - 7):
        w_count = 0
        b_count = 0
        
        for di in range(i, i + 8):
            for dj in range(j, j + 8):
                if (di + dj) % 2 == 0:
                    if board[di][dj] != 'W':
                        w_count += 1
                    else:
                        b_count += 1
                else:
                    if board[di][dj] != 'W':
                        b_count += 1
                    else:
                        w_count += 1
        
        count.append(w_count)
        count.append(b_count)

print(min(count))