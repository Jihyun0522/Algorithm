N = int(input())
candys = list(map(int, input().split()))
candy_sum = sum(candys)

if candy_sum % 2 == 0:
    print(candy_sum)
else:
    odd_candys = [c for c in candys if c % 2 == 1]
    if not odd_candys:
        print(0)
    else:
        print(candy_sum - min(odd_candys))