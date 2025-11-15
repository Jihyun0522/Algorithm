import math

def solution(num_list):
    if len(num_list) < 11:
        return math.prod(num_list)
    else:
        return sum(num_list)