const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(n[0]);
let b = Number(n[1]);

if (a%2==0) {
    console.log("even")
}
else {
    console.log("odd")
}

if (b%2==0) {
    console.log("even")
}
else {
    console.log("odd")
}