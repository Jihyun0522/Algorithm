def solution(my_string, indices):
    my_list = [
        my_string[i] 
        for i in range(len(my_string)) 
        if i not in indices
    ]
    
    return "".join(my_list)