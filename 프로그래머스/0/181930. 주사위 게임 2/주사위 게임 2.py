def solution(a, b, c):
    answer = 0
    numCount = len({a, b, c});
    
    baseSum = a + b + c
    squareSum = a**2 + b**2 + c**2
    cubeSum = a**3 + b**3 + c**3
    
    if numCount == 1:
        return baseSum * squareSum * cubeSum;
    elif numCount == 2:
        return baseSum * squareSum;
    else:
         return baseSum;