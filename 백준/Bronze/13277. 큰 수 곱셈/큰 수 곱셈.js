const input = require('fs').readFileSync(0).toString().trim().split(/\s+/);

let strA = input[0];
let strB = input[1];

let n = 1;
while (n < strA.length + strB.length) {
    n <<= 1;
}

const realA = new Float64Array(n);
const imagA = new Float64Array(n);
const realB = new Float64Array(n);
const imagB = new Float64Array(n);

for (let i = 0; i < strA.length; i++) {
    realA[i] = Number(strA[strA.length - 1 - i]);
}
for (let i = 0; i < strB.length; i++) {
    realB[i] = Number(strB[strB.length - 1 - i]);
}

function fft(real, imag, invert) {
    const n = real.length;
    for (let i = 1, j = 0; i < n; i++) {
        let bit = n >> 1;
        for (; j & bit; bit >>= 1) j ^= bit;
        j ^= bit;
        if (i < j) {
            [real[i], real[j]] = [real[j], real[i]];
            [imag[i], imag[j]] = [imag[j], imag[i]];
        }
    }
    for (let len = 2; len <= n; len <<= 1) {
        let ang = (2 * Math.PI / len) * (invert ? -1 : 1);
        let wlen_real = Math.cos(ang);
        let wlen_imag = Math.sin(ang);
        for (let i = 0; i < n; i += len) {
            let w_real = 1, w_imag = 0;
            for (let j = 0; j < len / 2; j++) {
                let u_real = real[i + j], u_imag = imag[i + j];
                let v_real = real[i + j + len / 2] * w_real - imag[i + j + len / 2] * w_imag;
                let v_imag = real[i + j + len / 2] * w_imag + imag[i + j + len / 2] * w_real;
                real[i + j] = u_real + v_real;
                imag[i + j] = u_imag + v_imag;
                real[i + j + len / 2] = u_real - v_real;
                imag[i + j + len / 2] = u_imag - v_imag;
                let tmp = w_real * wlen_real - w_imag * wlen_imag;
                w_imag = w_real * wlen_imag + w_imag * wlen_real;
                w_real = tmp;
            }
        }
    }
    if (invert) {
         for (let i = 0; i < n; i++) {
             real[i] /= n; imag[i] /= n;
         }
    }
}

fft(realA, imagA, false);
fft(realB, imagB, false);
for (let i = 0; i < n; i++) {
    let r = realA[i] * realB[i] - imagA[i] * imagB[i];
    let im = realA[i] * imagB[i] + imagA[i] * realB[i];
    realA[i] = r; imagA[i] = im;
}
fft(realA, imagA, true);

let res = new Int32Array(n);
let carry = 0;
for (let i = 0; i < n; i++) {
    let val = Math.round(realA[i]) + carry;
    res[i] = val % 10;
    carry = Math.floor(val / 10);
}

let last = n - 1;
while (last > 0 && res[last] === 0) {
    last--;
}

let answer = "";
for (let i = last; i >= 0; i--) {
    answer += res[i];
}

console.log(answer);