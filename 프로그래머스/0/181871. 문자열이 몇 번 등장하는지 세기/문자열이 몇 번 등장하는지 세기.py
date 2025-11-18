def solution(myString, pat):
    answer = 0
    startIndex = 0
    while True:
        findIndex = myString.find(pat, startIndex)
        
        if findIndex == -1:
            break;
        else:
            answer += 1
            startIndex = findIndex + 1
    return answer