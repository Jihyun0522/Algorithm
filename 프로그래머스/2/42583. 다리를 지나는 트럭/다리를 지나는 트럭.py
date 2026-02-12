from collections import deque

def solution(bridge_length, weight, truck_weights):
    time = 0
    bridge = deque([0] * bridge_length)
    truck_weights = deque(truck_weights)
    current_weight = 0
    
    while truck_weights:
        time += 1
        leaving_truck = bridge.popleft()
        current_weight -= leaving_truck
        
        if current_weight + truck_weights[0] <= weight:
            new_truck = truck_weights.popleft()
            bridge.append(new_truck)
            current_weight += new_truck
        else:
            bridge.append(0)
            
    return time + bridge_length