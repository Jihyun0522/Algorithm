def solution(arr):
    if 2 not in arr:
        return [-1]
    
    start_idx = arr.index(2)
    
    last_idx = -1
    for i in range(len(arr) - 1, -1, -1):
        if arr[i] == 2:
            last_idx = i
            break
            
    return arr[start_idx : last_idx + 1]