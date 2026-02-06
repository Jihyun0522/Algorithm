def solution(A,B):
    total = 0

    A.sort()
    B.sort(reverse=True)
    
    for a, b in zip(A, B):
        total += a * b;

    return total