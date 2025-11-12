def solution(arr, intervals):
    interval1, interval2 = intervals[0], intervals[1]
    
    a1, b1 = interval1
    a2, b2 = interval2

    return arr[a1 : b1 + 1] + arr[a2 : b2 + 1]