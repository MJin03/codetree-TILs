const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

let spire = 80 - n;

if (spire < 0) {
    console.log("pass")
}
else {
    console.log(`"${spire} more score"`)
}