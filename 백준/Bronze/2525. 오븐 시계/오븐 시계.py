h, m = map(int, input().split())
t = int(input())

total_m = h * 60 + m + t

print((total_m // 60) % 24, total_m % 60)