from collections import Counter

T = int(input())
for _ in range(T):
    n = int(input())
    
    counter = Counter()
    for _ in range(n):
        name, category = input().split()
        counter[category] += 1
        
    result = 1
    for count in counter.values():
        result *= (count + 1)
     
    print(result - 1)