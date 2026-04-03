import math

T = int(input())
for _ in range(T):
    N = int(input())
    
    if N >= 5:
        print(0)
    else:
        print(math.factorial(N) % 10)