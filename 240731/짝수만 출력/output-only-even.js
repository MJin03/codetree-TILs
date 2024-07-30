const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);

let result = "";
let i = a;

while (i<=b) {
    if (i%2==0) {
        result += i + " ";
    }
    i++;
}

console.log(result);