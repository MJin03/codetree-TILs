const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(".");

let y = Number(n[0]);
let m = Number(n[1]);
let d = Number(n[2]);

console.log(`${m}-${d}-${y}`)