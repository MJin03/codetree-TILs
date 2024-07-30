const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(":");

let h = Number(n[0]);
let m = Number(n[1]);

console.log(`${h+1}:${m}`)