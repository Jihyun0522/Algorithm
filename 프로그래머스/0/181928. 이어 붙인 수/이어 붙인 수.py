def solution(num_list):
    oddStr = "".join([str(num) for num in num_list if num % 2 != 0])
    evenStr = "".join([str(num) for num in num_list if num % 2 == 0])
    
    return int(oddStr) + int(evenStr)