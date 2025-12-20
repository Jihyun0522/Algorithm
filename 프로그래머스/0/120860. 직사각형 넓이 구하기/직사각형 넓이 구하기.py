def solution(dots):
    x_dots = [dot[0] for dot in dots]
    y_dots = [dot[1] for dot in dots]
    
    x = max(x_dots) - min(x_dots)
    y = max(y_dots) - min(y_dots)
    
    return x * y