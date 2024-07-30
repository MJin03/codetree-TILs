const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);

let resultA, resultB;


if (a < b) {
    resultA = 1;
}
else {
    resultA = 0;
}

if (a == b) {
   resultB = 1;
}
else {
   resultB = 0;
}

console.log(resultA, resultB)