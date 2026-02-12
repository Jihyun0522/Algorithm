function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = new Array(bridge_length).fill(0);
    let current_weight = 0;
    
    let truck_idx = 0;

    while (truck_idx < truck_weights.length) {
        time++;
        
        let leaving_truck = bridge.shift(); 
        current_weight -= leaving_truck;
        
        if (current_weight + truck_weights[truck_idx] <= weight) {
            let new_truck = truck_weights[truck_idx];
            bridge.push(new_truck);
            current_weight += new_truck;
            truck_idx++;
        } else {
            bridge.push(0);
        }
    }
    
    return time + bridge_length;
}