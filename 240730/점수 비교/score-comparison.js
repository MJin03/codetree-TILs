const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");
let a = n[0].split(" ");
let b = n[1].split(" ");

let ma = Number(a[0]);
let ea = Number(a[1]);

let mb = Number(b[0]);
let eb = Number(b[1]);

if (ma>mb && ea>eb) {
    console.log(1)
}
else {
    console.log(0)
}