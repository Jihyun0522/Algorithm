def solution(myString, pat):
    myString = myString.replace('A', 'X')
    myString = myString.replace('B', 'A')
    myString = myString.replace('X', 'B')
    
    if pat in myString:
        return 1
    else:
        return 0
