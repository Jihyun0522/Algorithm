const input = require('fs').readFileSync(0).toString().trim();
const N = parseInt(input);
const words = Array(N).fill("LoveisKoreaUniversity");
console.log(words.join(" "));