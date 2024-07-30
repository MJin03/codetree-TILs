const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");

let s = n[0];
let t = n[1];

[s,t] = [t,s];

console.log(s);
console.log(t);