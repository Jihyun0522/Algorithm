function z(n, r, c) {
    if (n === 0) {
        return 0;
    }
    
    const half = Math.pow(2, n - 1);
    
    if (r < half && c < half) {
        return 0 * (half * half) + z(n - 1, r, c);
    } else if (r < half && c >= half) {
        return 1 * (half * half) + z(n - 1, r, c - half)
    } else if (r >= half && c < half) {
        return 2 * (half * half) + z(n - 1, r - half, c)
    } else {
        return 3 * (half * half) + z(n - 1, r - half, c - half)
    }
}

const [N, r, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
console.log(z(N, r, c));