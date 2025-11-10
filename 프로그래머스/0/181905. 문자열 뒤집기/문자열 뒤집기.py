def solution(my_string, s, e):
    my_list = list(my_string)
    my_list[s : e + 1] = my_list[s : e + 1][::-1]
    return "".join(my_list)