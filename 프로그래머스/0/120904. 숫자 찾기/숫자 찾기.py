def solution(num, k):
    idx = str(num).find(str(k))
    return -1 if idx == -1 else idx + 1