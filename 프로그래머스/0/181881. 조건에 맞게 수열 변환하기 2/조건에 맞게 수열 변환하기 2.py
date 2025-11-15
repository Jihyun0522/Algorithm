def solution(arr):
    x = 0
    
    while True:
        arr_prev = arr[:]
        
        for i in range(len(arr)):
            num = arr[i]
            if num >= 50 and num % 2 == 0:
                arr[i] = num // 2
            elif num < 50 and num % 2 != 0:
                arr[i] = num * 2 + 1
        
        if arr == arr_prev:
            return x
        
        x += 1