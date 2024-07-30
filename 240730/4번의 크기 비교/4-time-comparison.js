const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = input[1].split(" ")

let a = Number(input[0]);
let b = Number(n[0]);
let c = Number(n[1]);
let d = Number(n[2]);
let e = Number(n[3]);

console.log(a > b ? 1 : 0)
console.log(a > c ? 1 : 0)
console.log(a > d ? 1 : 0)
console.log(a > e ? 1 : 0)