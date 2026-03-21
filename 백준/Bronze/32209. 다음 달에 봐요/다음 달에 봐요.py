Q = int(input())
pool = 0

for _ in range(Q):
    check, n = map(int, input().split())
    
    if check == 1: 
        pool += n
    else:
        if pool >= n:
            pool -= n
        else:
            print('Adios')
            break
else:
    print('See you next month')