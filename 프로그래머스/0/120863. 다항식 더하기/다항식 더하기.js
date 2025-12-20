function solution(polynomial) {
    let x = 0;
    let num = 0;
    
    for (term of polynomial.split(" + ")) {
        if (term.includes("x")) {
            const constant = term.replace("x", "");
            x += constant === "" ? 1 : parseInt(constant);
        } else {
            num += parseInt(term);
        }
    }
    
    const result = [];
    if (x > 0) result.push(x === 1 ? "x" : `${x}x`);
    if (num > 0) result.push(num);
    return result.join(" + ").toString();
}