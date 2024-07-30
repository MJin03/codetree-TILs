const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);

let result = "";

if (a>0) {
    for (let i=1; i<=b; i++) {
        result += a + "";
    }
}
else {
    console.log(0);
}

console.log(result);