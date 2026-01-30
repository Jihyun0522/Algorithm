def solution(players, callings):
    player_indices = {name: i for i, name in enumerate(players)}
    
    for called_name in callings:
        current_idx = player_indices[called_name]
        
        prev_idx = current_idx - 1
        prev_name = players[prev_idx]
        
        players[prev_idx], players[current_idx] = players[current_idx], players[prev_idx]
        
        player_indices[called_name] = prev_idx
        player_indices[prev_name] = current_idx
        
    return players