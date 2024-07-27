const fs = require("fs");
let n = fs.readFileSync(0).toString().split("\n");

let a = Number(n[0]);
let b = Number(n[1]);
let c = Number(n[2]);

console.log(`${a.toFixed(3)}
${b.toFixed(3)}
${c.toFixed(3)}`);