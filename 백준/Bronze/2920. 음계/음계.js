const ascending = "1 2 3 4 5 6 7 8";
const descending = "8 7 6 5 4 3 2 1";
const input = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

if (input.join(' ') === ascending) {
    console.log("ascending");
} else if (input.join(' ') ===  descending) {
    console.log("descending");
} else {
    console.log("mixed");
}