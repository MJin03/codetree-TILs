const fs = require("fs");
let a = Number(fs.readFileSync(0).toString());
let n = a + 1.5;

console.log(n.toFixed(2));