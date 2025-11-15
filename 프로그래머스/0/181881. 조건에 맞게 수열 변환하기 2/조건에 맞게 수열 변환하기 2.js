function solution(arr) {
    let x = 0;
    
    while(true) {
        const arr_prev = [...arr]
        
        for (let i = 0; i < arr.length; i++) {
            const num = arr[i];

            if (num >= 50 && num % 2 == 0) {
                arr[i] = num / 2;
            } else if (num < 50 && num % 2 != 0) {
                arr[i] = num * 2 + 1;
            }
        }
        
        const isEqual = arr.length === arr_prev.length && 
                         arr.every((val, i) => val === arr_prev[i]);
        
        if (isEqual) return x;
        
        x += 1;
    }
}