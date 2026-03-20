d1, d2, d3 = map(int, input().split())

total = (d1 + d2 + d3) / 2

a = total - d3
b = total - d2
c = total - d1

if a <= 0 or b <= 0 or c <= 0:
    print(-1)
else:
    print(1)
    print(round(a, 1), round(b, 1), round(c, 1))
