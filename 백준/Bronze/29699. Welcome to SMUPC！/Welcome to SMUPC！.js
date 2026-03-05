const input = require('fs').readFileSync(0).toString().trim();
const N = Number(input);

const LABEL = "WelcomeToSMUPC";
const index = (N - 1) % LABEL.length;

console.log(LABEL[index]);