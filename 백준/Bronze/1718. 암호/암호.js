const input = require('fs').readFileSync(0).toString().split('\n');
const s = input[0].split('');
const key = input[1].trimEnd().split('');
const keyLength = key.length;

while (key.length < s.length) {
    key.push(key[key.length % keyLength]);
}

for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
        s[i] = ' ';
    } else if (key[i].charCodeAt(0) < s[i].charCodeAt(0)) {
        const x = key[i].charCodeAt(0) - 96;
        s[i] = String.fromCharCode(s[i].charCodeAt(0) - x);
    } else {
        const x = 122 - key[i].charCodeAt(0) + s[i].charCodeAt(0);
        s[i] = String.fromCharCode(x);
    }
}

console.log(s.join(''));