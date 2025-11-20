import re

def solution(myStr):
    answer = [s for s in re.split('[abc]', myStr) if s]
    
    if not answer:
        return ["EMPTY"]
    
    return answer