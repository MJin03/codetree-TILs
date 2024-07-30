const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

if (n >= 3000) {
    console.log("book")
}
else {
    console.log("mask")
}