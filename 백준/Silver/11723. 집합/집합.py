import sys
input = sys.stdin.readline
write = sys.stdout.write

M = int(input())
S = set()

for _ in range(M):
    line = input().split()
    op = line[0]
    
    if op == 'add':
        S.add(int(line[1]))
    elif op == 'remove':
        S.discard(int(line[1]))
    elif op == 'check':
        write('1\n' if int(line[1]) in S else '0\n')
    elif op == 'toggle':
        x = int(line[1])
        S.discard(x) if x in S else S.add(x)
    elif op == 'all':
        S = set(range(1, 21))
    elif op == 'empty':
        S = set()
