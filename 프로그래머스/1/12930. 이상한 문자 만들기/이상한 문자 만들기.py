def solution(s):
    res = []
    for word in s.split(' '):
        new_word = ''
        for i in range(len(word)):
            if i % 2 == 0:
                new_word += word[i].upper()
            else:
                new_word += word[i].lower()
            pass
        res.append(new_word)
        
    # 모든 단어를 공백 하나로 연결해서 반환합니다.
    return ' '.join(res)