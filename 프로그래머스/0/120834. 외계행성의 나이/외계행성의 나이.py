def solution(age):
    return "".join([chr(ord('a') + int(char)) for char in str(age)]) 