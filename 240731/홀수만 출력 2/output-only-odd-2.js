const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let result = "";

let a = Number(n[0]);
let b = Number(n[1]);

for (let i=a; i>=b; i--) {
    result += (i + " ");
}

console.log(result);