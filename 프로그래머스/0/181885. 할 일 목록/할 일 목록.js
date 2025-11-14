function solution(todo_list, finished) {
    return todo_list.filter((task, i) => {
        return !finished[i];
    });
}