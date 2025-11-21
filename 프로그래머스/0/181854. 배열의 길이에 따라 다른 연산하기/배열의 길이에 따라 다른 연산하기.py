def solution(arr, n):
    L = len(arr)
    is_odd_length = L % 2 != 0

    return [
        val + n
        if (is_odd_length and i % 2 == 0) or (not is_odd_length and i % 2 != 0)
        else val
        for i, val in enumerate(arr)
    ];