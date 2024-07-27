const fs = require("fs");
let n = fs.readFileSync(0).toString().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);
let c = a+b;

console.log("%d %d %d", a, b, c);