const fs = require('fs')
let floor = 0;
const data = fs.readFileSync('one.txt', 'utf8')

for (let i = 0; i < data.length; i++) {
    if (data.charAt(i) === '(')
        floor++;
    else if (data.charAt(i) === ')')
        floor--;
    if (floor < 0) {
        console.log(i + 1)
        break;
    }
}

// console.log(floor)

