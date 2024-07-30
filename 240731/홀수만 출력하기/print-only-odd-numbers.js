const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");

let n1 = Number(n[0]);

for (let i=1; i<=n1; i++) {
    let a = Number(n[i]);

    if (a%2==1 && a%3==0) {
        console.log(a);
    }
}