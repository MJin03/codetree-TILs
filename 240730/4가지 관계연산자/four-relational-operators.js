const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);

console.log(a >= b ? 1 : 0)
console.log(a > b ? 1 : 0)
console.log(b >= a ? 1 : 0)
console.log(b > a ? 1 : 0)