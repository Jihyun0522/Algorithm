def solution(box, n):
    w = box[0] // n
    l = box[1] // n
    h = box[2] // n
    
    return w * l * h