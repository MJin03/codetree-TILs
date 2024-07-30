const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (n >= 1.0) {
    console.log("High")
}
else if (n >= 0.5) {
    console.log("Middle")
}
else {
    console.log("Low")
}