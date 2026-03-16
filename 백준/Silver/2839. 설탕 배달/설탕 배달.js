let N = Number(require('fs').readFileSync(0).toString().trim());
let bags = 0;

while (true) {
    if (N % 5 === 0) {
        bags += Math.floor(N / 5);
        console.log(bags);
        break;
    }
    N -= 3;
    bags++;
    
    if (N < 0) {
        console.log(-1);
        break;
    }
}