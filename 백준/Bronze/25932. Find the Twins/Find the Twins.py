N = int(input())

for _ in range(N):
    nums = list(map(int, input().split(' ')))
    
    print(' '.join(map(str, nums)));
    if 18 in nums and 17 in nums:
        print('both')
    elif 18 in nums:
        print('mack')
    elif 17 in nums:
        print('zack')
    else:
        print('none')
    print()