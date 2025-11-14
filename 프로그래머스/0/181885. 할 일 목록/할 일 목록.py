def solution(todo_list, finished):
    return [
        todo_list[i] 
        for i, is_finished in enumerate(finished) 
        if not is_finished
    ]