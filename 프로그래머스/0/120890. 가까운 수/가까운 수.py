def solution(array, n):
    sorted_arr = sorted(array, key=lambda x : (abs(x - n), x))
    return sorted_arr[0]