const fs = require("fs");
let n = fs.readFileSync(0).toString().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);

[a, b] = [b, a];

console.log("%d %d", a, b);