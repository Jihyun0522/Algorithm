const input = require('fs').readFileSync(0).toString().trim().split('\n');

const N = input.shift();
const members = input.map(line => {
    const [age, name] = line.split(' ');
    return {age: Number(age), name};
});
members.sort((a, b) => a.age - b.age);

console.log(members.map(m => `${m.age} ${m.name}`).join('\n'));