const special = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
const s = require('fs').readFileSync(0).toString().trim();
let count = 0;
let i = 0;

while (i < s.length) {
    let matched = false;
    for (const sp of special) {
        if (s.slice(i, i+sp.length) === sp) {
            count++;
            i += sp.length;
            matched = true;
            break;
        }
    }
    if (!matched) {
        count++;
        i++;
    }
}

console.log(count);