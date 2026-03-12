import sys

N = int(sys.stdin.readline())

target = 666
count = 0

while True:
    if '666' in str(target):
        count += 1
    
    if count == N:
        print(target)
        break
    
    target += 1