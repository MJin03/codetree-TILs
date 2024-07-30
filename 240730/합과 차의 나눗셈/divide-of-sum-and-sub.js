const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);

c = a + b;
d = a - b;

console.log((c/d).toFixed(2));