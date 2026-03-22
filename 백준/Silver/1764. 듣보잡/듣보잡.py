N, M = map(int, input().split())

known = set()
unknown = set()

for _ in range(N):
    known.add(input())

for _ in range(M):
    unknown.add(input())

result = sorted(known & unknown)
print(len(result))
for name in result:
    print(name)