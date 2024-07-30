const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("-");

let m = Number(n[0]);
let d = Number(n[1]);
let y = Number(n[2]);

console.log(`${y}.${m}.${d}`)