const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);

a += 8;
b *= 3;

console.log(a);
console.log(b);
console.log(a*b);