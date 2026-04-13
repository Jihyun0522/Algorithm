A, B = map(int, input().split())
A = int(str(A)[::-1])
B = int(str(B)[::-1])
print(A if A > B else B)