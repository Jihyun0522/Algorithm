def solution(polynomial):
    x = 0
    count = 0
    
    for term in polynomial.split(" + "):
        if "x" in term:
            replaced = term.replace("x", "")
            if replaced == "":
                x += 1
            else:
                x += int(replaced)
        else:
            count += int(term)
            
    answer = []
    
    if x == 1:
        answer.append("x")
    elif x > 1:
        answer.append(f"{x}x")

    if count > 0:
        answer.append(str(count))

    return " + ".join(answer)