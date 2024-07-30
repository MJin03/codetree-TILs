const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);
let c = Number(n[2]);

let min;

if (a < b && a < c) {
    min = a;
}
else if (b < a && b < c) {
    min = b;
}
else {
    min = c;
}

console.log(min)