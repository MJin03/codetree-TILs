const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

if (n == 100) {
    console.log("pass")
}
else {
    console.log("failure")
}