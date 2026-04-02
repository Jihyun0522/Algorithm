N = int(input())
points = list(map(int, input().split(' ')))
sorted_unique = sorted(set(points))
rank = {v: i for i, v in enumerate(sorted_unique)}
print(' '.join(str(rank[p]) for p in points))