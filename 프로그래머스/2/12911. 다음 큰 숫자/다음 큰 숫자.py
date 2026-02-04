def solution(n):
    target_count = bin(n).count('1')
    next_n = n + 1
    
    while True:
        if bin(next_n).count('1') == target_count:
            return next_n
        else:
            next_n += 1
