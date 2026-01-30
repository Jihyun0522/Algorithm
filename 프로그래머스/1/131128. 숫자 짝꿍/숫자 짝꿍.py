def solution(X, Y):
    answer = []
    
    for i in range(9, -1, -1):
        char = str(i)
        count_x = X.count(char)
        count_y = Y.count(char)

        common_count = min(count_x, count_y)

        answer.append(char * common_count)
        
    result = "".join(answer)
    
    if result == "":
        return "-1"
    
    if result[0] == "0":
        return "0"
    
    return result