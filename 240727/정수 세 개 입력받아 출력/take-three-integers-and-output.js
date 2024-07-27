const fs = require("fs");
let nm = fs.readFileSync(0).toString().split("\n");

let n = nm[0].split(" ");
let a = Number(n[0]);
let b = Number(n[1]);
let c = Number(nm[1]);

console.log(`${a} ${b} ${c}`);