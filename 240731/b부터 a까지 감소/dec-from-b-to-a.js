const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);

let result = "";

for (let i=b; i>=a; i--) {
    result += (i + " ");
}

console.log(result);