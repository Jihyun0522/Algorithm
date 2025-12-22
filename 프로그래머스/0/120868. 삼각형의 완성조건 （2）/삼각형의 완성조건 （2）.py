def solution(sides):
    low = abs(sides[0] - sides[1])
    high = sides[0] + sides[1]
    return high - low -1