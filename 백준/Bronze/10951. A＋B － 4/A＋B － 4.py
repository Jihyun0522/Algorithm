import sys

for line in sys.stdin:
    if line.strip():
        A, B = map(int, line.split())
        print(A + B)