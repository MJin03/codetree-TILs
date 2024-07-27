let ft = 30.48;
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let p = ft * n;

console.log(p.toFixed(1));