const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("-");

let p = Number(n[0]);
let l = Number(n[1]);

console.log(`${p}${l}`);