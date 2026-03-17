import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    ps = input().strip()
    count = 0
    
    for char in ps:
        if char == '(':
            count += 1
        elif char == ')':
            count -= 1
        
        if count < 0:
            break

    if count == 0:
        print("YES")
    else:
        print("NO")