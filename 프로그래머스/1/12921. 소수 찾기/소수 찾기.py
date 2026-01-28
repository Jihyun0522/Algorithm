def solution(n):
    num_list = [True] * (n + 1)
    num_list[0] = False
    num_list[1] = False
    
    for num in range(2, int(n**0.5) + 1):
        if num_list[num] == True:
            for i in range(num * num, n + 1, num):
                num_list[i] = False
    
    return num_list.count(True)