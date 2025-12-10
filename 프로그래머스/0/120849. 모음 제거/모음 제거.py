def solution(my_string):
    vowels = {'a', 'e', 'i', 'o', 'u'}
    
    return "".join([
        char 
        for char in my_string 
        if char not in vowels
    ])