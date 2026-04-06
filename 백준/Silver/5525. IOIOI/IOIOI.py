N = int(input())
M = int(input())
S = input()

cnt = 0
count = 0
i = 0
while i < M - 2:
    if S[i:i+3] == 'IOI':
        cnt += 1
        if cnt == N:
            count += 1
            cnt -= 1
        i += 2
    else:
        cnt = 0
        i += 1

print(count)