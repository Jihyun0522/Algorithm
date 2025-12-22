def solution(my_string):
    temp = ""
    for char in my_string:
        if char.isdigit():
            temp += char
        else:
            temp += " "
    
    return sum([int(i) for i in temp.split()])