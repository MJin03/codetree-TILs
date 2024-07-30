const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");
let a = n[0].split(" ");
let b = n[1].split(" ");

let ma = Number(a[0]), ea = Number(a[1]);
let mb = Number(b[0]), eb = Number(b[1]);

if (ma>mb || (ma==mb && ea>eb)) {
    console.log("A")
}
else {
    console.log("B")
}