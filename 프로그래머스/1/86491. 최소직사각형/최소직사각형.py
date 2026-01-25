def solution(sizes):
    max_w = 0
    max_h = 0
    
    for size in sizes:
        current_long = max(size[0], size[1])
        current_short = min(size[0], size[1])
        
        max_w = max(max_w, current_long)
        max_h = max(max_h, current_short)
        
    return max_w * max_h