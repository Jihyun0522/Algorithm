import sys

def my_round(num):
    if num - int(num) >= 0.5:
        return int(num) + 1
    else:
        return int(num)

input = sys.stdin.readline
n = int(input())

if n == 0:
    print(0)
else:
    opinions = []
    for _ in range(n):
        opinions.append(int(input()))
    
    opinions.sort()
    cut = my_round(n * 0.15)
    trimmed_list = opinions[cut : n-cut]
    print(my_round(sum(trimmed_list) / len(trimmed_list)))