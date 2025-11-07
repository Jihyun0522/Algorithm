from collections import Counter

def solution(a, b, c, d):
    counts = Counter([a, b, c, d])
    num_of_kinds = len(counts)
    keys = list(counts.keys())

    if num_of_kinds == 1:
        p = keys[0]
        return 1111 * p
    elif num_of_kinds == 2:
        max_freq = max(counts.values()) 

        if max_freq == 3:
            p, q = counts.most_common()[0][0], counts.most_common()[1][0]
            return (10 * p + q) ** 2
        else:
            p, q = keys[0], keys[1]
            return (p + q) * abs(p - q)

    elif num_of_kinds == 3:
        q_r_list = [k for k, v in counts.items() if v == 1]
        q, r = q_r_list[0], q_r_list[1]
        return q * r
    else:
        return min(a, b, c, d)