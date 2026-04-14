from collections import Counter

s = input().upper()
count = Counter(s)
max_count = max(count.values())
result = [k for k, v in count.items() if v == max_count]
print(result[0] if len(result) == 1 else '?')