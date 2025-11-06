function solution(start, end) {
    const length = end - start + 1;
    
    return Array.from({ length: length }, (_, index) => {
        return start + index; 
    });
}