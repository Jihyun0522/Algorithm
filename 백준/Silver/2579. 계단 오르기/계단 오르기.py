N = int(input())
point = [int(input()) for _ in range(N)]

dp = [0] * (N + 1)
dp[1] = point[0]

if N >= 2:
    dp[2] = point[0] + point[1]

for i in range(3, N + 1):
    dp[i] = max(dp[i-3] + point[i-2] + point[i-1], dp[i-2] + point[i-1])

print(dp[N]);