left, right = map(int, input().split())

if left == right:
    if left == 0:
        print('Not a moose')
    else:
        print('Even', left + right)
else:
    print('Odd', max(left, right) * 2)