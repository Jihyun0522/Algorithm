def solution(n):
    return sorted([num for num in range(1, n + 1) if n % num == 0])