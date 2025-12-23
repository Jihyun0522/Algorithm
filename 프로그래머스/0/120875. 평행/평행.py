def solution(dots):
    a, b, c, d = dots
    
    if (b[1]-a[1]) * (d[0]-c[0]) == (d[1]-c[1]) * (b[0]-a[0]):
        return 1
    
    if (c[1]-a[1]) * (b[0]-d[0]) == (b[1]-d[1]) * (c[0]-a[0]):
        return 1
    
    if (d[1]-a[1]) * (b[0]-c[0]) == (b[1]-c[1]) * (d[0]-a[0]):
        return 1
    
    return 0