import sys
input = sys.stdin.readline

L = int(input())
S = input().strip()

r = 31
M = 1234567891

total_hash = 0

for i in range(L):
    char_val = ord(S[i]) - ord('a') + 1
    total_hash += char_val * (r ** i)

print(total_hash % M)