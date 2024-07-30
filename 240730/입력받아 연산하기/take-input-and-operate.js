const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");

let a = Number(n[0]);
let b = Number(n[1]);

a += 87;
b %= 10;

console.log(a)
console.log(b)