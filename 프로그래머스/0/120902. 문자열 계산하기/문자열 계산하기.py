def solution(my_string):
    elements = my_string.split(' ')
    result = int(elements[0])

    for i in range(1, len(elements), 2):
        operator = elements[i] 
        operand = int(elements[i+1])
        
        if operator == '+':
            result += operand
        elif operator == '-':
            result -= operand
            
    return result