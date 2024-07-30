const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (n % 2 == 0) {
    n /= 2;
}

if (n % 2 == 1) {
    n += 1;
    n /= 2;
}

console.log(n)