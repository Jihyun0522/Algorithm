N = int(input())
sizes = list(map(int, input().split()))
T, P = map(int, input().split())

total_t_bundles = 0
for s in sizes:
    if s == 0:
        continue

    total_t_bundles += (s - 1) // T + 1

p_bundles = N // P
p_singles = N % P

print(total_t_bundles)
print(p_bundles, p_singles)