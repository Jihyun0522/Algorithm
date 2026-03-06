const input = require('fs').readFileSync(0).toString().trim().split('\n');

let nextNum = 0;

if (!isNaN(input[0])) {
    nextNum = Number(input[0]) + 3;
} else if (!isNaN(input[1])) {
    nextNum = Number(input[1]) + 2;
} else if (!isNaN(input[2])) {
    nextNum = Number(input[2]) + 1;
}

if (nextNum % 3 === 0 && nextNum % 5 === 0) {
    console.log('FizzBuzz');
} else if (nextNum % 3 === 0) {
    console.log('Fizz');
} else if (nextNum % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(nextNum);
}