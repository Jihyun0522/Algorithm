def solution(num, total):
    mid = total // num
    start = mid - ((num - 1) // 2)
    return [i for i in range(start, start + num)]