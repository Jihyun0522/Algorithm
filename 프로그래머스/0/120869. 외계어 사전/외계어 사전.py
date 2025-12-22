def solution(spell, dic):
    sorted_spell = sorted(spell)
    
    for word in dic:
        if sorted(word) == sorted_spell:
            return 1
        
    return 2