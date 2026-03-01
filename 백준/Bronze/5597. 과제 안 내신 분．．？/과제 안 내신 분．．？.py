attendance = [0] * 31

for _ in range(28):
    num = int(input())
    attendance[num] = 1

for i in range(1, 31):
    if attendance[i] == 0:
        print(i)