function solution(dots) {
    const x_dots = dots.map(dot => dot[0]);
    const y_dots = dots.map(dot => dot[1]);
    
    const x = Math.max(...x_dots) - Math.min(...x_dots);
    const y = Math.max(...y_dots) - Math.min(...y_dots);
    
    return x * y;
}