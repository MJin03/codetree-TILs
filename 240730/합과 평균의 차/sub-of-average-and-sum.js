const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);
let c = Number(n[2]);

let plus = a + b + c;
let average = parseInt(plus/3);
let min = plus - average;

console.log(`${plus}\n${average}\n${min}`)