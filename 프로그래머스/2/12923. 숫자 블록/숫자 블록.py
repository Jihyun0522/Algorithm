def solution(begin, end):
    answer = []
    
    for x in range(begin, end + 1):
        if x == 1:
            answer.append(0)
            continue

        temp = 1
        for i in range(2, int(x**0.5) + 1):
            if x % i == 0:
                if x // i <= 10000000:
                    temp = x // i
                    break
                else:
                    temp = i

        answer.append(temp)
        
    return answer