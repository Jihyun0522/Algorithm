T = int(input())
for _ in range(T):
    line = input()
    idx = line.find('D')
    print(idx if idx != -1 else len(line))