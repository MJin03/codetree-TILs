const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");

let c = n[0]
let a = Number(n[1]);
let b = Number(n[2]);

console.log(`${c}
${a.toFixed(2)}
${b.toFixed(2)}`);