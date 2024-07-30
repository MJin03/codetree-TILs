const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("-");

let second = Number(n[1]);
let last = Number(n[2]);

console.log(`010-${last}-${second}`)