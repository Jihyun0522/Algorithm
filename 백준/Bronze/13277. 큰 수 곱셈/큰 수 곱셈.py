import sys
sys.set_int_max_str_digits(1000000)
input = sys.stdin.readline

A, B = map(int, input().split())
print(A * B)