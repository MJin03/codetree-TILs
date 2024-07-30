const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

if (a == 1) {
    console.log("t")
}
else {
    console.log("f")
}