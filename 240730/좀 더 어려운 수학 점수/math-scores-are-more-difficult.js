const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");
let a = n[0].split(" ");
let b = n[1].split(" ");

let ma = Number(a[0]), ea = Number(a[1]);
let mb = Number(b[0]), eb = Number(b[1]);

if (ma>mb && ea>eb || eb>ea) {
    console.log("A")
}
else if (mb>ma && ea>eb || eb>ea) {
    console.log("B")
}
else if (ma==mb && ea>eb) {
    console.log("A")
}
else if (ma==mb && eb>ea) {
    console.log("B")
}