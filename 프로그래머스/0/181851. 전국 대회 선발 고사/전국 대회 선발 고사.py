def solution(rank, attendance):
    eligible_students = [
        (r, i) 
        for i, r in enumerate(rank) 
        if attendance[i] == True
    ]

    sorted_students = sorted(eligible_students)
    
    a = sorted_students[0][1]
    b = sorted_students[1][1]
    c = sorted_students[2][1]
    
    return 10000 * a + 100 * b + c