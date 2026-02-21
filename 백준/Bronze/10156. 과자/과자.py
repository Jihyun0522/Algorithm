K, N, M = map(int, input().split())
total = K * N
print(max(0, total - M))