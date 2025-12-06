def solution(emergency):
    sort_emergency = sorted(emergency, reverse=True)
    rank_map = {
        level: i + 1 
        for i, level in enumerate(sort_emergency)
    }
    return [rank_map[level] for level in emergency]