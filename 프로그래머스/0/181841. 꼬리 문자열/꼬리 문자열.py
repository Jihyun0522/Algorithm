def solution(str_list, ex):
    return "".join(list(filter(lambda s: ex not in s, str_list)))