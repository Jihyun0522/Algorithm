T = int(input())

for _ in range(T):
    data = input().split()
    R = int(data[0])
    S = data[1]
    
    P = ""
    for char in S:
        P += char * R
    
    print(P)