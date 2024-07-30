const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);
let c = Number(n[2]);

let plus = a + b + c;

console.log(`${plus}\n${parseInt(plus/3)}`)