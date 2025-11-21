def solution(arr):
    L = len(arr)
    target = 1
    
    while target < L:
        target *= 2
        
    return arr + [0] * (target - L)