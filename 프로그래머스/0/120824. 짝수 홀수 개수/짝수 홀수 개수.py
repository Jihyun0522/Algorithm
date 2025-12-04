def solution(num_list):
    even = sum(map(lambda x: x % 2 == 0, num_list))
    odd = sum(map(lambda x: x % 2 != 0, num_list))
    return [even, odd]