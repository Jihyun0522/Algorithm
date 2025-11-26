def solution(arr):
    R = len(arr)
    C = len(arr[0])
    
    if R > C:
        num_zeros_to_add = R - C

        for row in arr:
            row.extend([0] * num_zeros_to_add)

    elif C > R:
        num_rows_to_add = C - R

        new_row = [0] * C

        for _ in range(num_rows_to_add):
            arr.append(new_row)

    return arr