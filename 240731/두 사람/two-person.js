const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");
let a = n[0].split(" ");
let b = n[1].split(" ");

let aa = Number(a[0]), ag = a[1];
let ba = Number(b[0]), bg = b[1];

if ((aa>=19 && ag == "M") || (ba>=19 && bg == "M")) {
    console.log(1);
}
else {
    console.log(0);
}