const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let m = Number(n[0]);
let l = Number(n[1]);

if (m < 90) {
    console.log(0)
}
else {
    if (l >= 95) {
        console.log(100000)
    }
    else if (l >= 90) {
        console.log(50000)
    }
    else {
        console.log(0)
    }
}