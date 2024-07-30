const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

if (n < 0) {
    console.log(`${n}\nminus`);
}
else {
    console.log(n);
}