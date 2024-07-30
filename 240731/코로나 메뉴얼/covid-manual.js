const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n");
let x = n[0].split(" ");
let y = n[1].split(" ");
let z = n[2].split(" ");

let x1 = x[0], x2 = Number(x[1]);
let y1 = y[0], y2 = Number(y[1]);
let z1 = z[0], z2 = Number(z[1]);

let cnt;

if (x1=="Y" && x2>=37) {
    if ((y1=="Y" && y2>=37) || (z1=="Y" && z2>=37)) {
        console.log("E");
    }
    else {
        console.log("N");
    }
}
else {
    if ((y1=="Y" && y2>=37) && (z1=="Y" && z2>=37)) {
        console.log("E");
    }
    else {
        console.log("N");
    }
}