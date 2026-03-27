N = int(input())
for _ in range(N):
    r, e, c = map(int, input().split())
    profit = e - c
    if r < profit:
        print("advertise");
    elif r > profit:
        print("do not advertise");
    else:
        print("does not matter");