const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);
let c = Number(n[2]);

if (a>b && a>c) {
    if (b>c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
else if (b>a && b>c) {
    if (a>c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else {
    if (a>b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}