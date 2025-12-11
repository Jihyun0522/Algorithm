def solution(my_string):
    seen_chars = set()
    result = [];
    
    for char in my_string:
        if char not in seen_chars:
            seen_chars.add(char)
            result.append(char)
    
    return "".join(result)